/**
 * A handler containing callbacks that are called during the stream.
 */
export interface StreamChatCompletionHandler {
  /**
   * Called when a content draft is received. The draft may be a partial completion. When the completion is done, `isFinal` will be true.
   *
   * @param contentDraft The content draft, which may only be a partial completion. When `isFinal` is true, the draft is complete and considered final.
   * @param isFinal True when the completion finishes (the draft is final), false otherwise.
   * @param xhr The XHR for the request.
   */
  onContent?: (contentDraft: string, isFinal: boolean, xhr: XMLHttpRequest) => void;

  /**
   * Called when the XHR request is done or aborted (via `xhr.abort()`).
   *
   * @param xhr The XHR for the request.
   */
  onDone?: (xhr: XMLHttpRequest) => void;

  /**
   * Called when the XHR request is done with a failure status, or if it throws an error due to a network issue.
   *
   * @param error The error reported.
   * @param status The XHR status at the time of the error.
   * @param xhr The XHR for the request.
   */
  onError?: (error: Error, status: number, xhr: XMLHttpRequest) => void;
}

/**
 * OpenAI configuration for the chat completion.
 */
export interface StreamChatCompletionConfig {
  /**
   * The API key to uses for the request.
   */
  apiKey: string;
  /**
   * The URL for chat completions.
   *
   * Defaults to V1 chat completions, `OpenAIExt.V1_CHAT_COMPLETIONS_URL`.
   */
  chatCompletionsUrl?: string;
}

export class OpenAIExt {
  public static V1_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';

  /**
   * Stream the provided CreateChatCompletionRequest.
   *
   * Returns an XMLHttpRequest instance. To stop a completion, call `abort()` on the xhr instance.
   *
   * @param createChatCompletionRequest The completion request to stream. Pass the same argument you'd pass to the OpenAI API's `createChatCompletion` function.
   * @param config The config for the request. This includes the API key and an optional endpoint URL. Uses v1 chat completions endpoint by default.
   * @param handler A handler containing callbacks that are called during the stream.
   * @returns An XMLHttpRequest instance for the connection.
   */
  public static streamChatCompletion(
    createChatCompletionRequest: any,
    config: StreamChatCompletionConfig,
    handler?: StreamChatCompletionHandler,
  ): XMLHttpRequest {
    const apiKey = config.apiKey;
    const url = config.chatCompletionsUrl ?? OpenAIExt.V1_CHAT_COMPLETIONS_URL;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);

    xhr.onprogress = function (_event) {
      if (handler && handler.onContent) {
        const doneData = 'data: [DONE]';
        const isFinal = xhr.responseText.includes(doneData);
        const dataJsonLines = xhr.responseText
          .split('data: [DONE]')
          .join('')
          .trim()
          .split('data: ')
          .filter((v) => !!v);

        const contentSnippets = dataJsonLines.map((dataJson) => {
          let parsed: any = undefined;
          try {
            parsed = JSON.parse(dataJson);
            return parsed?.choices[0]?.delta?.content ?? '';
          } catch (e) {
            console.error(e);
          }
          return '';
        });

        const contentDraft = contentSnippets.join('');
        handler.onContent(contentDraft, isFinal, xhr);
      }
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        // In local files, status is 0 upon success in Mozilla Firefox
        // See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event#examples
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          if (handler && handler.onDone) {
            handler.onDone(xhr);
          }
        } else {
          if (handler && handler.onError) {
            handler.onError(
              new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`),
              xhr.status,
              xhr,
            );
          }
        }
      }
    };

    xhr.onerror = (event) => {
      if (handler && handler.onError) {
        handler.onError(
          new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`),
          xhr.status,
          xhr,
        );
      }
    };

    const data = JSON.stringify({
      ...createChatCompletionRequest,
      stream: true,
    });

    xhr.send(data);

    return xhr;
  }
}

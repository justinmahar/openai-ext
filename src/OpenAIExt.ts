export class OpenAIExt {
  public static V1_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';

  /**
   * Stream the provided CreateChatCompletionRequest.
   *
   * Returns an XMLHttpRequest instance. To stop a completion, call `abort()` on the xhr instance.
   *
   * @param createChatCompletionRequest The completion request to stream. Pass the same argument you'd pass to the OpenAI API's `createChatCompletion` function.
   * @param streamConfig The config for the request. This includes the API key and an optional endpoint URL. Uses v1 chat completions endpoint by default.
   * @returns An XMLHttpRequest instance for the connection.
   */
  public static streamClientChatCompletion(
    createChatCompletionRequest: any,
    streamConfig: ClientStreamChatCompletionConfig,
  ): XMLHttpRequest {
    const apiKey = streamConfig.apiKey;
    const url = streamConfig.chatCompletionsUrl ?? OpenAIExt.V1_CHAT_COMPLETIONS_URL;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);

    xhr.onprogress = function (_event) {
      if (streamConfig.handler?.onContent) {
        const dataString = xhr.responseText;
        const contentDraft = OpenAIExt.parseContentDraft(dataString);
        streamConfig.handler.onContent(contentDraft.content, contentDraft.isFinal, xhr);
      }
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        // In local files, status is 0 upon success in Mozilla Firefox
        // See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event#examples
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          if (streamConfig.handler?.onDone) {
            streamConfig.handler.onDone(xhr);
          }
        } else {
          if (streamConfig.handler?.onError) {
            streamConfig.handler.onError(
              new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`),
              xhr.status,
              xhr,
            );
          }
        }
      }
    };

    xhr.onerror = (event) => {
      if (streamConfig.handler?.onError) {
        streamConfig.handler.onError(
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

  /**
   * Stream the provided CreateChatCompletionRequest in Node.js or on the server. Config must include an `openai` instance that has been configured with the API key.
   *
   * To stop completion, call `stream.destroy()` or set up cancellation in the axios config. See https://axios-http.com/docs/cancellation.
   *
   * @param createChatCompletionRequest The completion request to stream. Pass the same argument you'd pass to the OpenAI API's `createChatCompletion` function.
   * @param streamConfig The config for the stream request. This includes the configured `openai` instance.
   * @param axiosConfig Optional axios config for the request.
   */
  public static streamServerChatCompletion(
    createChatCompletionRequest: any,
    streamConfig: ServerStreamChatCompletionConfig,
    axiosConfig: any,
  ): void {
    const responsePromise = streamConfig.openai.createChatCompletion(
      {
        ...createChatCompletionRequest,
        stream: true,
      },
      { ...axiosConfig, responseType: 'stream' },
    );

    responsePromise
      .then((response: any) => {
        const stream = response.data;
        let dataString = '';
        stream.on('data', (chunk: Buffer) => {
          if (streamConfig.handler?.onContent) {
            dataString += chunk.toString();
            const contentDraft = OpenAIExt.parseContentDraft(dataString);
            streamConfig.handler.onContent(contentDraft.content, contentDraft.isFinal, stream);
          }
        });
        stream.on('end', () => {
          if (streamConfig.handler?.onDone) {
            streamConfig.handler.onDone(stream);
          }
        });
        stream.on('error', (e: Error) => {
          if (streamConfig.handler?.onError) {
            streamConfig.handler.onError(e, stream);
          }
        });
      })
      .catch((e: Error) => {
        if (streamConfig.handler?.onError) {
          streamConfig.handler.onError(e, undefined);
        }
      });
  }

  public static parseContentDraft(dataString: string): ContentDraft {
    const doneData = 'data: [DONE]';
    const isFinal = dataString.includes(doneData);
    const dataJsonLines = dataString
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

    const content = contentSnippets.join('');

    return {
      content,
      isFinal,
    };
  }
}

export interface ContentDraft {
  content: string;
  isFinal: boolean;
}

/**
 * A handler containing callbacks that are called during the stream on the client (browser).
 */
export interface ClientStreamChatCompletionHandler {
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
 * OpenAI configuration for the client-side (browser) chat completion.
 */
export interface ClientStreamChatCompletionConfig {
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
  /**
   * A handler containing callbacks that are called during the stream.
   */
  handler?: ClientStreamChatCompletionHandler;
}

/**
 * A handler containing callbacks that are called during the stream.
 */
export interface ServerStreamChatCompletionHandler {
  /**
   * Called when a content draft is received. The draft may be a partial completion. When the completion is done, `isFinal` will be true.
   *
   * @param contentDraft The content draft, which may only be a partial completion. When `isFinal` is true, the draft is complete and considered final.
   * @param isFinal True when the completion finishes (the draft is final), false otherwise.
   * @param stream The Axios request stream (of type IncomingMessage).
   */
  onContent?: (contentDraft: string, isFinal: boolean, stream: any) => void;

  /**
   * Called when the request is done.
   *
   * @param stream The Axios request stream (of type IncomingMessage).
   */
  onDone?: (stream: any) => void;

  /**
   * Called when there is an error during streaming. For example, 401 unauthorized when the API key is invalid.
   *
   * The `stream` argument may be `undefined` if the stream could not be created.
   *
   * @param error The error reported.
   * @param stream The Axios request stream (of type IncomingMessage) or `undefined` if the stream couldn't be created.
   */
  onError?: (error: Error, stream?: any) => void;
}

/**
 * OpenAI configuration for the server-side (Node.js) chat completion.
 */
export interface ServerStreamChatCompletionConfig {
  /**
   * Configured OpenAI API instance (for server-side only).
   */
  openai: any;
  /**
   * A handler containing callbacks that are called during the stream.
   */
  handler?: ServerStreamChatCompletionHandler;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIExt = void 0;
class OpenAIExt {
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
    static streamChatCompletion(createChatCompletionRequest, config, handler) {
        var _a;
        const apiKey = config.apiKey;
        const url = (_a = config.chatCompletionsUrl) !== null && _a !== void 0 ? _a : OpenAIExt.V1_CHAT_COMPLETIONS_URL;
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
                    var _a, _b, _c;
                    let parsed = undefined;
                    try {
                        parsed = JSON.parse(dataJson);
                        return (_c = (_b = (_a = parsed === null || parsed === void 0 ? void 0 : parsed.choices[0]) === null || _a === void 0 ? void 0 : _a.delta) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : '';
                    }
                    catch (e) {
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
                }
                else {
                    if (handler && handler.onError) {
                        handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`), xhr.status, xhr);
                    }
                }
            }
        };
        xhr.onerror = (event) => {
            if (handler && handler.onError) {
                handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`), xhr.status, xhr);
            }
        };
        const data = JSON.stringify(Object.assign(Object.assign({}, createChatCompletionRequest), { stream: true }));
        xhr.send(data);
        return xhr;
    }
}
exports.OpenAIExt = OpenAIExt;
OpenAIExt.V1_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';

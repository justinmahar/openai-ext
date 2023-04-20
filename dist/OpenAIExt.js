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
     * @param streamConfig The config for the request. This includes the API key and an optional endpoint URL. Uses v1 chat completions endpoint by default.
     * @returns An XMLHttpRequest instance for the connection.
     * @throws An error if called in a Node.js environment.
     */
    static streamClientChatCompletion(createChatCompletionRequest, streamConfig) {
        var _a;
        if (!streamConfig.allEnvsAllowed && OpenAIExt.isEnvNodeJS()) {
            throw new Error('You are performing a client/browser chat completion in a Node.js environment.\nUse OpenAIExt.streamServerChatCompletion() instead. To disable this error and proceed anyways (not recommended), set the allEnvsAllowed option to true.\nSee: https://github.com/justinmahar/openai-ext/#nodejs--server');
        }
        const apiKey = streamConfig.apiKey;
        const url = (_a = streamConfig.chatCompletionsUrl) !== null && _a !== void 0 ? _a : OpenAIExt.V1_CHAT_COMPLETIONS_URL;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + apiKey);
        xhr.onprogress = function (_event) {
            var _a, _b;
            if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onContent) {
                const dataString = xhr.responseText;
                try {
                    const contentDraft = OpenAIExt.parseContentDraft(dataString);
                    streamConfig.handler.onContent(contentDraft.content, contentDraft.isFinal, xhr);
                }
                catch (e) {
                    if ((_b = streamConfig.handler) === null || _b === void 0 ? void 0 : _b.onError) {
                        streamConfig.handler.onError(e, xhr.status, xhr);
                    }
                }
            }
        };
        xhr.onreadystatechange = () => {
            var _a, _b;
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const status = xhr.status;
                // In local files, status is 0 upon success in Mozilla Firefox
                // See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event#examples
                if (status === 0 || (status >= 200 && status < 400)) {
                    // The request has been completed successfully
                    if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onDone) {
                        streamConfig.handler.onDone(xhr);
                    }
                }
                else {
                    if ((_b = streamConfig.handler) === null || _b === void 0 ? void 0 : _b.onError) {
                        streamConfig.handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`), xhr.status, xhr);
                    }
                }
            }
        };
        xhr.onerror = (event) => {
            var _a;
            if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onError) {
                streamConfig.handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`), xhr.status, xhr);
            }
        };
        const data = JSON.stringify(Object.assign(Object.assign({}, createChatCompletionRequest), { stream: true }));
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
    static streamServerChatCompletion(createChatCompletionRequest, streamConfig, axiosConfig = {}) {
        if (!streamConfig.allEnvsAllowed && !OpenAIExt.isEnvNodeJS()) {
            throw new Error('You are performing a server/Node.js chat completion in a browser environment. Use OpenAIExt.streamClientChatCompletion() instead. To disable this error and proceed anyways (not recommended), set the allEnvsAllowed option to true.\nSee: https://github.com/justinmahar/openai-ext/#browser--client');
        }
        const responsePromise = streamConfig.openai.createChatCompletion(Object.assign(Object.assign({}, createChatCompletionRequest), { stream: true }), Object.assign(Object.assign({}, axiosConfig), { responseType: 'stream' }));
        responsePromise
            .then((response) => {
            const stream = response.data;
            let dataString = '';
            stream.on('data', (chunk) => {
                var _a, _b;
                if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onContent) {
                    dataString += chunk.toString();
                    try {
                        const contentDraft = OpenAIExt.parseContentDraft(dataString);
                        streamConfig.handler.onContent(contentDraft.content, contentDraft.isFinal, stream);
                    }
                    catch (e) {
                        if ((_b = streamConfig.handler) === null || _b === void 0 ? void 0 : _b.onError) {
                            streamConfig.handler.onError(e, stream);
                        }
                    }
                }
            });
            stream.on('end', () => {
                var _a;
                if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onDone) {
                    streamConfig.handler.onDone(stream);
                }
            });
            stream.on('error', (e) => {
                var _a;
                if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onError) {
                    streamConfig.handler.onError(e, stream);
                }
            });
        })
            .catch((e) => {
            var _a;
            if ((_a = streamConfig.handler) === null || _a === void 0 ? void 0 : _a.onError) {
                streamConfig.handler.onError(e, undefined);
            }
        });
        return responsePromise;
    }
    /**
     * Parse a content draft from the provided data string. The data string contains lines of JSON completion data starting with `data: ` that are separated by two newlines.
     * The completion is terminated by the line `data: [DONE]`, when the completion content can be considered final and done.
     *
     * The returned content draft is an object containing a `content` property with the content, which may be partial, and an `isFinal`
     * boolean that will be `true` when the content is final and the completion is done.
     *
     * Returns:
     * ```ts
     * {
     *   content: string; // Content string. May be partial.
     *   isFinal: boolean; // When true, the content string is complete.
     * }
     * ```
     *
     * Throws and error when the stream contains an error message.
     *
     * @param dataString The data string containing double-newline-separated data lines starting with `data: `.
     * @returns An object containing a `content` property with the content, which may be partial, and an `isFinal`
     * boolean that will be `true` when the content is final and the completion is done.
     * @throws An error when the JSON response contains an error.
     */
    static parseContentDraft(dataString) {
        const dataPrefix = 'data: ';
        const doneData = `${dataPrefix}[DONE]`;
        const isFinal = dataString.includes(doneData);
        const dataJsonLines = dataString
            .split(doneData)
            .join('')
            .trim()
            .split(dataPrefix)
            .filter((v) => !!v); // Remove empty lines
        const contentSnippets = dataJsonLines.map((dataJson) => {
            var _a, _b, _c;
            try {
                const parsed = JSON.parse(dataJson);
                if (parsed.error) {
                    throw new Error(JSON.stringify(parsed.error));
                }
                else {
                    return (_c = (_b = (_a = parsed === null || parsed === void 0 ? void 0 : parsed.choices[0]) === null || _a === void 0 ? void 0 : _a.delta) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : '';
                }
            }
            catch (e) {
                console.error(e);
                console.error(`Bad data JSON: \`${dataJson}\``);
            }
            return '';
        });
        const content = contentSnippets.join('');
        return {
            content,
            isFinal,
        };
    }
    /**
     * Returns true if the environment is Node.js (server), false otherwise.
     *
     * @returns True if the environment is Node.js (server), false otherwise.
     */
    static isEnvNodeJS() {
        var _a;
        return typeof process !== 'undefined' && ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node);
    }
    /**
     * Returns true if the environment is the browser (client), false otherwise.
     *
     * @returns True if the environment is the browser (client), false otherwise.
     */
    static isEnvBrowser() {
        return !OpenAIExt.isEnvNodeJS();
    }
}
exports.OpenAIExt = OpenAIExt;
OpenAIExt.V1_CHAT_COMPLETIONS_URL = 'https://api.openai.com/v1/chat/completions';

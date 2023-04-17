<h2 align="center">
  🤖 openai-ext
</h2>
<h3 align="center">
  Extension to OpenAI's API to support streaming chat completions.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/openai-ext" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/openai-ext.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/openai-ext/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/openai-ext/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/openai-ext/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/openai-ext/)**.

## Overview

This project extends OpenAI's API to support stream chat completions on both the server (Node.js) and client (browser).

> Note: This is an unofficial working solution until OpenAI adds streaming support. This issue is being tracked here: [How to use stream: true? #18](https://github.com/openai/openai-node/issues/18).

### Features include:

- **💻 Support for streaming chat completions**
  - Easy to use API extension for chat completion stream support.
- **⚙️ Easy to configure**
  - Dead simple configuration for API key and stream handlers.
- **🌎 Works in both server (Node.js) and client (browser) environments**
  - Stream completions in either environment: Node.js or in the browser!
- **🛑 Support for stopping completions**
  - Simply call `abort()` on the returned XHR to stop the completion.

[lock:donate]::🚫---------------------------------------

## Donate 

If this project helped you, please consider buying me a coffee. Your support is much appreciated!

<a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/openai-ext/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/openai-ext/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/openai-ext/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Browser / Client](#browser--client)
  - [Node.js / Server](#nodejs--server)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i openai-ext
```

## Quick Start

### Browser / Client

Use the following solution in a browser environment:

```js
import { OpenAIExt } from "openai-ext";

// Configure the stream (use type ClientStreamChatCompletionConfig for TypeScript users)
const streamConfig = {
  apiKey: `123abcXYZasdf`, // Your API key
  handler: {
    // Content contains the string draft, which may be partial. When isFinal is true, the completion is done.
    onContent(content, isFinal, xhr) {
      console.log(content, "isFinal?", isFinal);
    },
    onDone(xhr) {
      console.log("Done!");
    },
    onError(error, status, xhr) {
      console.error(error);
    },
  },
};

// Make the call and store a reference to the XMLHttpRequest
const xhr = OpenAIExt.streamClientChatCompletion(
  {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Give me a bunch of fun emojis!" },
    ],
  },
  streamConfig
);
```

```js
// If you'd like to stop the completion, call xhr.abort(). The onDone() handler will be called.
xhr.abort();
```

### Node.js / Server

Use the following solution in a Node.js or server environment:

```js
import { Configuration, OpenAIApi } from 'openai';
import { OpenAIExt } from "openai-ext";

const apiKey = `123abcXYZasdf`; // Your API key
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

// Configure the stream (use type ServerStreamChatCompletionConfig for TypeScript users)
const streamConfig = {
  openai: openai,
  handler: {
    // Content contains the string draft, which may be partial. When isFinal is true, the completion is done.
    onContent(content, isFinal, stream) {
      console.log(content, "isFinal?", isFinal);
    },
    onDone(stream) {
      console.log('Done!');
    },
    onError(error, stream) {
      console.error(error);
    },
  },
};

const axiosConfig = {
  // ...
};

// Make the call to stream the completion
OpenAIExt.streamServerChatCompletion(
  {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Give me a bunch of fun emojis!' },
    ],
  },
  streamConfig,
  axiosConfig
);
```

If you'd like to stop the completion, call `stream.destroy()`. The `onDone()` handler will be called.

```js
stream.destroy();
```

You can also stop completion using an [Axios cancellation](https://axios-http.com/docs/cancellation) in the Axios config.

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/openai-ext/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/openai-ext/stargazers): [👉⭐](https://github.com/justinmahar/openai-ext/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/openai-ext/?path=/story/license--page).
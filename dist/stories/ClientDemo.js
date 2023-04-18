'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ClientDemo = void 0;
const http_status_codes_1 = require('http-status-codes');
const react_1 = __importDefault(require('react'));
require('bootstrap/dist/css/bootstrap.css');
const react_bootstrap_1 = require('react-bootstrap');
const OpenAIExt_1 = require('../OpenAIExt');
const ClientDemo = (props) => {
  const [apiKey, setApiKey] = react_1.default.useState('');
  const trimmedApiKey = apiKey.trim();
  const [systemMessage, setSystemMessage] = react_1.default.useState('You are a helpful assistant.');
  const trimmedSystemMessage = systemMessage.trim();
  const [userPrompt, setUserPrompt] = react_1.default.useState('Tell me a funny joke.');
  const trimmedUserPrompt = userPrompt.trim();
  const [error, setError] = react_1.default.useState(undefined);
  const [status, setStatus] = react_1.default.useState(undefined);
  const [completion, setCompletion] = react_1.default.useState('');
  const [xhr, setXhr] = react_1.default.useState(undefined);
  const [shouldRun, setShouldRun] = react_1.default.useState(false);
  const [running, setRunning] = react_1.default.useState(false);
  const canSend = trimmedApiKey && trimmedSystemMessage && trimmedUserPrompt;
  react_1.default.useEffect(() => {
    if (shouldRun && !running) {
      setShouldRun(false);
      setRunning(true);
      setError(undefined);
      setStatus(undefined);
      setCompletion('');
      const xhr = OpenAIExt_1.OpenAIExt.streamClientChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemMessage },
            { role: 'user', content: userPrompt },
          ],
        },
        {
          apiKey,
          handler: {
            onContent(contentDraft, isFinal, xhr) {
              setCompletion(contentDraft);
            },
            onDone(xhr) {
              setRunning(false);
              setXhr(undefined);
            },
            onError(error, status, xhr) {
              console.error(error);
              setError(error);
              setStatus(status);
              setXhr(undefined);
              setRunning(false);
            },
          },
        },
      );
      setXhr(xhr);
    }
  }, [apiKey, running, shouldRun, systemMessage, userPrompt]);
  return react_1.default.createElement(
    react_bootstrap_1.Card,
    null,
    react_1.default.createElement(
      react_bootstrap_1.Card.Header,
      null,
      react_1.default.createElement(
        'div',
        { className: 'd-flex flex-wrap align-items-center gap-4' },
        react_1.default.createElement('div', null, 'Client Chat Completion Stream Demo'),
        react_1.default.createElement(
          'div',
          { style: { fontSize: '80%' } },
          react_1.default.createElement(
            'a',
            { href: 'https://github.com/justinmahar/openai-ext/blob/master/src/stories/ClientDemo.tsx' },
            'View Demo Source',
          ),
        ),
      ),
    ),
    react_1.default.createElement(
      react_bootstrap_1.Card.Body,
      null,
      react_1.default.createElement(
        react_bootstrap_1.Form,
        {
          className: 'd-flex flex-column gap-2',
          onSubmit: (e) => {
            e.preventDefault();
            if (canSend && !running) {
              setShouldRun(true);
            }
          },
        },
        react_1.default.createElement(
          react_bootstrap_1.Card,
          null,
          react_1.default.createElement(
            react_bootstrap_1.Card.Body,
            { className: 'd-flex flex-column gap-1' },
            react_1.default.createElement('div', { className: 'small fw-bold' }, 'API Key:'),
            react_1.default.createElement(react_bootstrap_1.Form.Control, {
              type: 'text',
              placeholder: 'Enter API key',
              value: apiKey,
              onChange: (e) => setApiKey(e.target.value),
              required: true,
            }),
          ),
        ),
        react_1.default.createElement(
          react_bootstrap_1.Alert,
          { variant: 'info', className: 'd-flex flex-column gap-1 mb-0' },
          react_1.default.createElement('div', { className: 'small fw-bold' }, 'System Message:'),
          react_1.default.createElement(react_bootstrap_1.Form.Control, {
            type: 'text',
            placeholder: 'Enter system message',
            value: systemMessage,
            onChange: (e) => setSystemMessage(e.target.value),
            required: true,
          }),
        ),
        react_1.default.createElement(
          react_bootstrap_1.Alert,
          { variant: 'primary', className: 'd-flex flex-column gap-1 mb-0' },
          react_1.default.createElement('div', { className: 'small fw-bold' }, 'User Prompt:'),
          react_1.default.createElement(react_bootstrap_1.Form.Control, {
            type: 'text',
            placeholder: 'Enter user prompt',
            value: userPrompt,
            onChange: (e) => setUserPrompt(e.target.value),
            required: true,
          }),
        ),
        react_1.default.createElement(
          'div',
          { className: 'd-flex gap-1' },
          react_1.default.createElement(
            react_bootstrap_1.Button,
            { type: 'submit', variant: 'primary', disabled: running },
            react_1.default.createElement(
              'div',
              { className: 'd-flex align-items-center gap-2' },
              running &&
                react_1.default.createElement(react_bootstrap_1.Spinner, {
                  animation: 'border',
                  role: 'status',
                  size: 'sm',
                }),
              'Send',
            ),
          ),
          react_1.default.createElement(
            react_bootstrap_1.Button,
            {
              type: 'submit',
              variant: 'secondary',
              disabled: !running,
              onClick: () => (xhr === null || xhr === void 0 ? void 0 : xhr.abort()),
            },
            'Stop',
          ),
        ),
        completion &&
          react_1.default.createElement(
            react_bootstrap_1.Alert,
            { variant: 'success', className: 'd-flex flex-column gap-1 mb-0' },
            react_1.default.createElement(
              'pre',
              { className: 'fw-bold mb-0', style: { whiteSpace: 'pre-wrap' } },
              completion,
              running && react_1.default.createElement(react_1.default.Fragment, null, '\u2588'),
            ),
          ),
        error &&
          react_1.default.createElement(
            react_bootstrap_1.Alert,
            { variant: 'danger', className: 'd-flex flex-column gap-1 mb-0' },
            status &&
              react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement(
                  react_bootstrap_1.Badge,
                  { bg: 'danger' },
                  status,
                  ' ',
                  (0, http_status_codes_1.getReasonPhrase)(status),
                ),
              ),
            react_1.default.createElement('div', { className: 'fw-bold' }, `${error}`),
          ),
      ),
    ),
  );
};
exports.ClientDemo = ClientDemo;

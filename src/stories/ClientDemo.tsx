import 'bootstrap/dist/css/bootstrap.css';
import { getReasonPhrase } from 'http-status-codes';
import React from 'react';
import { Alert, Badge, Button, Card, Form, Spinner } from 'react-bootstrap';
import { DivProps } from 'react-html-props';
import { OpenAIExt } from '../OpenAIExt';

export interface ClientDemoProps extends DivProps {}

export const ClientDemo = (props: ClientDemoProps) => {
  const [apiKey, setApiKey] = React.useState('');
  const [model, setModel] = React.useState('gpt-3.5-turbo');
  const trimmedApiKey = apiKey.trim();
  const [systemPrompt, setSystemPrompt] = React.useState('You are a helpful assistant.');
  const trimmedSystemMessage = systemPrompt.trim();
  const [userPrompt, setUserPrompt] = React.useState('Tell me a funny joke.');
  const trimmedUserPrompt = userPrompt.trim();
  const [error, setError] = React.useState<undefined | Error>(undefined);
  const [status, setStatus] = React.useState<undefined | number>(undefined);
  const [completion, setCompletion] = React.useState('');
  const [xhr, setXhr] = React.useState<XMLHttpRequest | undefined>(undefined);
  const [showKey, setShowKey] = React.useState(false);

  const [shouldRun, setShouldRun] = React.useState(false);
  const [running, setRunning] = React.useState(false);

  const canSend = trimmedApiKey && trimmedSystemMessage && trimmedUserPrompt;

  React.useEffect(() => {
    if (shouldRun && !running) {
      setShouldRun(false);
      setRunning(true);
      setError(undefined);
      setStatus(undefined);
      setCompletion('');

      const xhr = OpenAIExt.streamClientChatCompletion(
        {
          model,
          messages: [
            { role: 'system', content: systemPrompt },
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
  }, [apiKey, running, shouldRun, systemPrompt, userPrompt]);

  return (
    <Card>
      <Card.Header>
        <div className="d-flex flex-wrap align-items-center gap-4">
          <div>Client Chat Completion Stream Demo</div>
          <div style={{ fontSize: '80%' }}>
            <a href="https://github.com/justinmahar/openai-ext/blob/master/src/stories/ClientDemo.tsx">
              View Demo Source
            </a>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Form
          className="d-flex flex-column gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (canSend && !running) {
              setShouldRun(true);
            }
          }}
        >
          <Card>
            <Card.Body className="d-flex flex-column gap-1">
              <div>
                <div className="small fw-bold">API Key:</div>
                <div className="d-flex gap-1">
                  <Form.Control
                    type={showKey ? 'text' : 'password'}
                    placeholder="Enter API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    required
                  />
                  <Button variant="outline-primary" onClick={() => setShowKey(!showKey)}>
                    {showKey ? 'Hide' : 'Show'}
                  </Button>
                </div>
              </div>
              <div>
                <div className="small fw-bold">Model:</div>
                <Form.Control
                  type="text"
                  placeholder="Enter model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </div>
            </Card.Body>
          </Card>
          <Alert variant="info" className="d-flex flex-column gap-1 mb-0">
            <div className="small fw-bold">🤖 System Prompt:</div>
            <Form.Control
              type="text"
              placeholder="Enter system prompt"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              required
            />
          </Alert>
          <Alert variant="primary" className="d-flex flex-column gap-1 mb-0">
            <div className="small fw-bold">👤 User Prompt:</div>
            <Form.Control
              type="text"
              placeholder="Enter user prompt"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              required
            />
          </Alert>
          <div className="d-flex gap-1">
            <Button type="submit" variant="primary" disabled={running}>
              <div className="d-flex align-items-center gap-2">
                {running && <Spinner animation="border" role="status" size="sm" />}
                Send
              </div>
            </Button>
            <Button type="submit" variant="secondary" disabled={!running} onClick={() => xhr?.abort()}>
              Stop
            </Button>
          </div>
          {completion && (
            <Alert variant="success" className="d-flex flex-column gap-1 mb-0">
              <pre className="fw-bold mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                {completion}
                {running && <>█</>}
              </pre>
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="d-flex flex-column gap-1 mb-0">
              {status && (
                <div>
                  <Badge bg="danger">
                    {status} {getReasonPhrase(status)}
                  </Badge>
                </div>
              )}
              <div className="fw-bold">{`${error}`}</div>
            </Alert>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

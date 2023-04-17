import React from 'react';
import { DivProps } from 'react-html-props';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';
import { OpenAIExt } from '../OpenAIExt';

export interface ClientDemoProps extends DivProps {}

export const ClientDemo = (props: ClientDemoProps) => {
  const [apiKey, setApiKey] = React.useState('');
  const trimmedApiKey = apiKey.trim();
  const [systemMessage, setSystemMessage] = React.useState('You are a helpful assistant.');
  const trimmedSystemMessage = systemMessage.trim();
  const [userPrompt, setUserPrompt] = React.useState('Give me a bunch of fun emojis!');
  const trimmedUserPrompt = userPrompt.trim();
  const [error, setError] = React.useState<undefined | Error>(undefined);
  const [completion, setCompletion] = React.useState('');

  const [shouldRun, setShouldRun] = React.useState(false);
  const [running, setRunning] = React.useState(false);

  const canSend = trimmedApiKey && trimmedSystemMessage && trimmedUserPrompt;

  React.useEffect(() => {
    if (shouldRun && !running) {
      setShouldRun(false);
      setRunning(true);

      OpenAIExt.streamClientChatCompletion(
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
            },
            onError(error, status, xhr) {
              console.error(error);
              setError(error);
              setRunning(false);
            },
          },
        },
      );
    }
  }, [apiKey, running, shouldRun, systemMessage, userPrompt]);

  return (
    <Card>
      <Card.Header>Client Chat Completion Stream Demo</Card.Header>
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
              <div className="small fw-bold">API Key:</div>
              <Form.Control
                type="text"
                placeholder="Enter API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
              />
            </Card.Body>
          </Card>
          <Alert variant="info" className="d-flex flex-column gap-1 mb-0">
            <div className="small fw-bold">System Message:</div>
            <Form.Control
              type="text"
              placeholder="Enter system message"
              value={systemMessage}
              onChange={(e) => setSystemMessage(e.target.value)}
              required
            />
          </Alert>
          <Alert variant="primary" className="d-flex flex-column gap-1 mb-0">
            <div className="small fw-bold">User Prompt:</div>
            <Form.Control
              type="text"
              placeholder="Enter user prompt"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              required
            />
          </Alert>
          <div>
            <Button type="submit" variant="primary" disabled={!canSend || running}>
              <div className="d-flex align-items-center gap-2">
                {running && <Spinner animation="border" role="status" size="sm" />}
                Send
              </div>
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
              <div className="fw-bold">{`${error}`}</div>
            </Alert>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

import type { Meta, StoryObj } from '@storybook/react';
import { ClientDemo } from './ClientDemo';

// === Setup ===
const StoryComponent = ClientDemo; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Demo', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const Hello: Story = {
  name: 'Client Demo',
};

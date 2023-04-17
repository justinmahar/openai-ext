/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClientDemo } from './ClientDemo';

export default {
  title: 'Demo',
  component: ClientDemo,
} as ComponentMeta<typeof ClientDemo>;

const Template: ComponentStory<typeof ClientDemo> = (args) => <ClientDemo {...args} />;

export const Client = Template.bind({});
Client.args = {};
Client.story = {
  name: 'Client Demo',
};

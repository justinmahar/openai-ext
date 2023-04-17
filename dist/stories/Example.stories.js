"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const ClientDemo_1 = require("./ClientDemo");
exports.default = {
    title: 'Demo',
    component: ClientDemo_1.ClientDemo,
};
const Template = (args) => react_1.default.createElement(ClientDemo_1.ClientDemo, Object.assign({}, args));
exports.Client = Template.bind({});
exports.Client.args = {};
exports.Client.story = {
    name: 'Client Demo',
};

import { configure } from '@storybook/react';
const context = require.context('../', true, /stories\.js$/);

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);

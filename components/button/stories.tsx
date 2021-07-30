import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button
};

const Template = (args: unknown): JSX.Element => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  backgroundColor: 'blue'
};



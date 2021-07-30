import React from 'react';

import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input
};

const Template = (args: unknown): JSX.Element => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type here'
};



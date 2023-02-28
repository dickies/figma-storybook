import { ComponentMeta, Story } from "@storybook/react";
import { SyntheticEvent } from "react";
import Button, { ButtonProps } from "../components/Button";

export default {
  title: "Components/FilledButton",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

export const Enabled = Template.bind({});

Enabled.args = {
  primaryCategory: "filled",
  secondaryCategory: "enabled",
  children: <span>Enabled</span>,
};

Enabled.parameters = {
  design: {
    type: "figspec",
    url: "https://www.figma.com/file/0AuUHxuA0ZlxUdjbxklm6H/1xDXP-Library-UI?node-id=1927%3A9335&t=ycVbx7u3EvJWOejW-4",
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  primaryCategory: "filled",
  secondaryCategory: "disabled",
  children: <span>Disabled</span>,
};

Disabled.parameters = {
  design: {
    type: "figspec",
    url: "https://www.figma.com/file/Jp0btOGVdHYO6XdPnKtpeu/Material-3-Design-Kit-(Community)?node-id=50716%3A11396",
  },
};

import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: 'Não sei',
    colorDark: false,
  },
  argTypes: {
    children: { type: 'string', },
    colorDark: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const Template = (args) => <Heading {...args} />

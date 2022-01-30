import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: 'Footer',
  },
  argTypes: {
    html: { type: 'string', },
  },
}

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}

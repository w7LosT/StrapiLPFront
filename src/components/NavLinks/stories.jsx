import { NavLinks } from './index';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: {
      type: 'array',
    },
  },
}

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  )
}

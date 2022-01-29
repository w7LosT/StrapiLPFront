import { GridSection } from './index';
import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
}

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  )
}

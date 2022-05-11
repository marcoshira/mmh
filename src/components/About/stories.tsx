import { Meta, Story } from '@storybook/react/types-6-0';
import { About } from '.';
import { AboutProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'About',
  component: About,
  args: mock.data.mmh.data.attributes.About,
} as Meta<AboutProps>;

export const Template: Story<AboutProps> = (args) => {
  return (
    <div>
      <About {...args} />
    </div>
  );
};

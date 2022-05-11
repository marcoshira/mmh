import { Meta, Story } from '@storybook/react/types-6-0';
import { Home } from '.';
import { HomeProps } from './index';
import mock from '../../api/dados.json';

export default {
  title: 'Home',
  component: Home,
  args: mock.data.mmh.data,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<HomeProps>;

export const Template: Story<HomeProps> = (args) => {
  return (
    <div>
      <Home {...args} />
    </div>
  );
};

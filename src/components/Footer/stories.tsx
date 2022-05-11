import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';
import { FooterProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'Footer',
  component: Footer,
  args: mock.data.mmh.data.attributes.Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

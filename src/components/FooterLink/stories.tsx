import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterLink } from '.';
import { FooterLinkProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'FooterLink',
  component: FooterLink,
  args: mock.data.mmh.data.attributes.Footer.Footer_link[2],
} as Meta<FooterLinkProps>;

export const Template: Story<FooterLinkProps> = (args) => {
  return (
    <div>
      <FooterLink {...args} />
    </div>
  );
};

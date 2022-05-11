import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuLink } from '.';
import { MenuLinkProps } from '../../shared-types/shared-types';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    Text: 'MenuLink',
    Url: 'https://www.google.com.br/',
    NewTab: true,
  },
  argTypes: {
    Text: { type: 'string' },
  },
} as Meta;

export const Template: Story<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};

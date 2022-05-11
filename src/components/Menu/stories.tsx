import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from '.';
import { MenuProps } from '../../shared-types/shared-types';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    Menu_link: linksMock,
    Menu_text: 'Marcos Hirazawa',
    Menu_logo: {
      data: null,
    },
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ height: '300vh', background: 'white' }}>
      <Menu {...args} />
    </div>
  );
};

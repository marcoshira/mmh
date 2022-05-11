import { Meta, Story } from '@storybook/react/types-6-0';
import { Cursos } from '.';
import { CursosProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'Cursos',
  component: Cursos,
  args: mock.data.mmh.data.attributes.Cursos,
} as Meta<CursosProps>;

export const Template: Story<CursosProps> = (args) => {
  return (
    <div>
      <Cursos {...args} />
    </div>
  );
};

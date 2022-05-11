import { Meta, Story } from '@storybook/react/types-6-0';
import { CursoElement } from '.';
import { CursoProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'CursoElement',
  component: CursoElement,
  args: mock.data.mmh.data.attributes.Cursos.Curso[0],
} as Meta<CursoProps>;

export const Template: Story<CursoProps> = (args) => {
  return (
    <div>
      <CursoElement {...args} />
    </div>
  );
};

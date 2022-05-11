import { Meta, Story } from '@storybook/react/types-6-0';
import { ProjectElement } from '.';
import { ProjectProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'ProjectElement',
  component: ProjectElement,
  args: mock.data.mmh.data.attributes.Projects.Project[0],
} as Meta<ProjectProps>;

export const Template: Story<ProjectProps> = (args) => {
  return (
    <div>
      <ProjectElement {...args} />
    </div>
  );
};

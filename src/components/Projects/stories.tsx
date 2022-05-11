import { Meta, Story } from '@storybook/react/types-6-0';
import { Projects } from '.';
import { ProjectsProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'Projects',
  component: Projects,
  args: mock.data.mmh.data.attributes.Projects,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<ProjectsProps>;

export const Template: Story<ProjectsProps> = (args) => {
  return (
    <div>
      <Projects {...args} />
    </div>
  );
};

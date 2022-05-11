import { Meta, Story } from '@storybook/react/types-6-0';
import { Skills } from '.';
import { SkillsProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'Skills',
  component: Skills,
  args: mock.data.mmh.data.attributes.Skills,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<SkillsProps>;

export const Template: Story<SkillsProps> = (args) => {
  return (
    <div>
      <Skills {...args} />
    </div>
  );
};

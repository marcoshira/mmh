import { Meta, Story } from '@storybook/react/types-6-0';
import { SkillElement } from '.';
import { SkillProps } from '../../shared-types/shared-types';
import mock from '../../api/dados.json';

export default {
  title: 'SkillElement',
  component: SkillElement,
  args: mock.data.mmh.data.attributes.Skills.Skill[0],
} as Meta<SkillProps>;

export const Template: Story<SkillProps> = (args) => {
  return (
    <div>
      <SkillElement {...args} />
    </div>
  );
};

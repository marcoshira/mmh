import { SkillsProps } from '../../shared-types/shared-types';
import { Heading } from '../Heading';
import { SkillElement } from '../Skill';
import * as Styled from './styles';

export const Skills = ({ Skill, Title }: SkillsProps) => {
  return (
    <Styled.Wrapper id="Habilidades">
      <Heading>{Title}</Heading>
      <Styled.SkillsWrapper>
        {Skill.map((skill) => (
          <SkillElement key={skill.id} {...skill} />
        ))}
      </Styled.SkillsWrapper>
    </Styled.Wrapper>
  );
};

// {links.map((link) => (
//   <MenuLink key={link.id} {...link} />
// ))}

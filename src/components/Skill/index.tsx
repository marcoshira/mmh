import { SkillProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const SkillElement = ({
  Skill_logo,
  Skill_name,
  Skill_description = '',
}: SkillProps) => {
  return (
    <Styled.Wrapper>
      <img src={Skill_logo.data.attributes.url} />
      <Styled.TextWrapper>{Skill_name}</Styled.TextWrapper>
      {Skill_description ? (
        <Styled.TextWrapper>{Skill_description}</Styled.TextWrapper>
      ) : null}
    </Styled.Wrapper>
  );
};

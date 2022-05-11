import { ProjectsProps } from '../../shared-types/shared-types';
import { Heading } from '../Heading';
import { ProjectElement } from '../Project';
import * as Styled from './styles';

export const Projects = ({ Project, Title }: ProjectsProps) => {
  return (
    <Styled.Wrapper id="Projetos">
      <Heading>{Title}</Heading>
      <Styled.ProjectsWrapper>
        {Project.map((link) => (
          <ProjectElement key={link.id} {...link} />
        ))}
      </Styled.ProjectsWrapper>
    </Styled.Wrapper>
  );
};

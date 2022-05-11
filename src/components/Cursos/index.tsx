import { CursosProps } from '../../shared-types/shared-types';
import { CursoElement } from '../Curso';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const Cursos = ({ Curso, Title }: CursosProps) => {
  return (
    <Styled.Wrapper id="Cursos">
      <Heading>{Title}</Heading>
      <Styled.CursosWrapper>
        {Curso.map((link) => (
          <CursoElement key={link.id} {...link} />
        ))}
      </Styled.CursosWrapper>
    </Styled.Wrapper>
  );
};

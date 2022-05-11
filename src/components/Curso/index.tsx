import { CursoProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const CursoElement = ({ Certificado_url, Title }: CursoProps) => {
  return (
    <Styled.Wrapper>
      <span>{Title}</span>
      <a href={Certificado_url} target="_blank" rel="noreferrer">
        Certificado
      </a>
    </Styled.Wrapper>
  );
};

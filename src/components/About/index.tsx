import { AboutProps } from '../../shared-types/shared-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const About = ({ Content, Image, Title }: AboutProps) => {
  return (
    <Styled.Wrapper id="Sobre">
      <Heading size="huge">{Title}</Heading>
      <Styled.ContentWrapper>
        <img src={Image.data.attributes.url} />
        <Styled.TextWrapper>{Content}</Styled.TextWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

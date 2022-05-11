import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { FooterProps } from '../../shared-types/shared-types';
import { FooterLink } from '../FooterLink';
import { Heading } from '../Heading';

export const Footer = ({ Footer_link, Footer_text }: FooterProps) => {
  return (
    <Styled.Container id="Contato">
      <Heading size="medium">{Footer_text}</Heading>
      <Styled.Wrapper>
        {Footer_link.map((link) => (
          <FooterLink key={link.id} {...link} />
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  );
};

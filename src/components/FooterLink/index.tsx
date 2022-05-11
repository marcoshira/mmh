import { FooterLinkProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const FooterLink = ({
  Link_profile,
  Logo,
  Link_url,
}: FooterLinkProps) => {
  const showHover = !!Link_url;

  return (
    <Styled.Wrapper showHover={showHover}>
      {Link_url ? (
        <a href={Link_url}>
          <img src={Logo.data.attributes.url} />
          <Styled.LinkWrapper>{Link_profile}</Styled.LinkWrapper>
        </a>
      ) : (
        <Styled.NoLinkWrapper>
          <img src={Logo.data.attributes.url} />
          <Styled.LinkWrapper>{Link_profile}</Styled.LinkWrapper>
        </Styled.NoLinkWrapper>
      )}
    </Styled.Wrapper>
  );
};

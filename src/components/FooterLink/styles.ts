import styled, { css } from 'styled-components';

type showHover = {
  showHover?: boolean;
};

const hover = (theme) => css`
  color: ${theme.colors.thirdColor};
`;

export const Wrapper = styled.div<showHover>`
  ${({ theme, showHover }) => css`
    font-size: ${theme.font.sizes.ltmedium};
    margin-left: ${theme.spacings.medium};
    img {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    }
    a {
      display: flex;
      text-decoration: none;
      color: ${theme.colors.primaryColor};
      height: ${theme.spacings.medium};

      &:hover {
        color: ${theme.colors.primaryColor};
        ${showHover && hover(theme)}
      }
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.medium};
      margin-left: 0;
    }
  `}
`;

export const LinkWrapper = styled.span`
  ${({ theme }) => css`
    position: relative;
    left: ${theme.spacings.xsmall};
    top: 0px;
    color: ${theme.colors.footerPrimaryColor};
  `}
`;

export const NoLinkWrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    left: ${theme.spacings.xsmall};
    top: 0px;

    @media ${theme.media.lteMedium} {
      left: 0px;
    }
  `}
`;

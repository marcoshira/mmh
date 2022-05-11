import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.ltmedium};
    padding: ${theme.spacings.small};
    color: ${theme.colors.thirdColor};
    position: relative;
    transition: all 200ms ease-in-out;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }

    &:hover {
      color: ${theme.colors.secondaryColor};
    }
  `}
`;

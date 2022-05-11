import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.thirdColor};

    &:hover {
      color: ${theme.colors.secondaryColor};
    }

    > img {
      height: 3rem;
    }
  `};
`;

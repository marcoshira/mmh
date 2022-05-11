import styled, { css } from 'styled-components';

export const Wrapper = styled.figure`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;

    img {
      width: 180px;
      height: 180px;
      border-radius: 10%;
      box-shadow: 5px 3px 10px ${theme.colors.thirdColor};
      background: ${theme.colors.primaryColor};
    }
  `}
`;

export const TextWrapper = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

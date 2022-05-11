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
      box-shadow: 0px 1px 10px ${theme.colors.thirdColor};
      background: ${theme.colors.navy};
    }

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.small};

      img {
        width: 90px;
        height: 90px;
      }
    }
  `}
`;

export const TextWrapper = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

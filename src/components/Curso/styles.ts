import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({ theme }) => css`
    width: 60%;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: ${theme.spacings.xsmall} 0;
    border: 1.5px solid ${theme.colors.secondaryColor};
    border-radius: 10px;
    position: relative;
    a {
      text-decoration: none;
      position: absolute;
      right: 20px;
      &:hover {
        color: ${theme.colors.secondaryColor};
      }
    }

    span {
      position: absolute;
      left: 20px;
    }

    @media ${theme.media.lteMedium} {
      width: 90%;
      flex-direction: column;
      height: 50px;
      align-items: center;

      span {
        font-size: ${theme.font.sizes.xsmall};
        position: static;
        margin-bottom: 5px;
      }
      a {
        position: static;
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `}
`;

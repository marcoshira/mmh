import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > ${Title} {
      margin: ${theme.spacings.medium};
    }
    margin: 0 ${theme.spacings.medium};
    width: 32%;
    max-width: 32%;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    box-shadow: 0px 1px 9px ${theme.colors.thirdColor};
    img {
      width: 320px;
      margin: 0 ${theme.spacings.xlarge};
    }

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.small};
      width: 85%;
      max-width: 85%;
      flex-flow: column wrap;
      margin: ${theme.spacings.medium};
      margin-top: 0;

      img {
        width: 225px;
      }
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 300px;
    align-items: center;
    flex-flow: column;
    padding: ${theme.spacings.medium};

    a {
      text-decoration: none;
      /* padding: ${theme.spacings.medium} 0; */

      &:hover {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;

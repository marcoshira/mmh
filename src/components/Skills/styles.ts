import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: ${theme.spacings.xlarge};

    ${Title} {
      margin-bottom: ${theme.spacings.huge};
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding-top: 0;
      overflow-x: hidden;
      flex-flow: column wrap;
      text-align: center;

      ${Title} {
        margin-bottom: ${theme.spacings.medium};
      }
    }
  `}
`;

export const SkillsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid: repeat(2, 250px) / auto-flow 230px;

    @media ${theme.media.lteMedium} {
      grid: repeat(3, 130px) / auto-flow 120px;

      /* img {
        width: 70px;
        height: 90px;
      } */
    }
  `}
`;

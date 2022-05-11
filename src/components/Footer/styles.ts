import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.2rem solid ${theme.colors.thirdColor};
    margin: ${theme.spacings.xlarge} 0;

    ${SectionContainer} {
      > span {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;

    margin-top: ${theme.spacings.large};
  `}
`;

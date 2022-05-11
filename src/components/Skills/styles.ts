import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: ${theme.spacings.medium};

    ${Title} {
      margin-bottom: ${theme.spacings.huge};
    }
  `}
`;

export const SkillsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid: repeat(2, 250px) / auto-flow 230px;
  `}
`;

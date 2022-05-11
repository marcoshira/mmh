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
    box-shadow: 4px 3px 10px ${theme.colors.thirdColor};
    img {
      width: 320px;
      box-shadow: 3px 2px 5px ${theme.colors.primaryColor};
      margin: 0 ${theme.spacings.xlarge};
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
      padding: ${theme.spacings.medium} 0;

      &:hover {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;

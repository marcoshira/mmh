import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    ${Title} {
      /* margin-top: ${theme.spacings.ltmedium}; */
    }
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80%;
  img {
    width: 620px;
    height: 500px;
  }
`;

export const TextWrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge};
    padding-left: ${theme.spacings.huge};
    /* padding-top: ${theme.spacings.huge}; */
    margin-right: 0;
    line-height: 1.5;
    font-size: ${theme.font.sizes.medium};
  `}
`;

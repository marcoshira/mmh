import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xlarge};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    ${Title} {
      /* margin-top: ${theme.spacings.ltmedium}; */
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding-top: 0;
      overflow-x: hidden;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    width: 85%;
    img {
      width: 620px;
      height: 500px;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      img {
        width: 180px;
        height: 150px;
      }
    }
  `}
`;

export const TextWrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge};
    padding-left: ${theme.spacings.huge};
    /* padding-top: ${theme.spacings.huge}; */
    margin-right: 0;
    line-height: 1.5;
    font-size: ${theme.font.sizes.medium};

    @media ${theme.media.lteMedium} {
      margin: 0;
      padding-left: 0;
      line-height: 1.2;
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.large};
      text-align: center;
    }
  `}
`;

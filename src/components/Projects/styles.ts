import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-top: ${theme.spacings.huge};

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;

export const ProjectsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: ${theme.spacings.huge};

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

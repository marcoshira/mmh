import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  `}
`;

export const CursosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

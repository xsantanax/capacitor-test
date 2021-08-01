import styled, { css } from 'styled-components'

export const Container = styled.div``

export const ChildrenWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.bgLight};
    padding-top: ${theme.heights.headerDesktopHeight};

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding-top: ${theme.heights.headerMobileHeight};
    }
  `}
`

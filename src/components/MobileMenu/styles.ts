import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bgLight};
    top: ${theme.heights.headerDesktopHeight};
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
    padding: 60px 10px;
    padding-bottom: 150px;
    display: none;
    position: absolute;
    /* overflow: scroll; */

    @media (max-width: ${theme.breakpoints.desktopHeader}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      top: ${theme.heights.headerMobileHeight};
    }
  `}
`

export const ItemAnchor = styled.a`
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 30px;
  font-size: 23px;
  line-height: 31px;
  ${({ theme }) => css`
    :hover {
      color: ${theme.colors.secondary};
    }
  `}
`

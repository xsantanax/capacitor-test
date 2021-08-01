import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 20px 50px;

  ${({ theme }) => css`
    background-color: ${theme.colors.bgDark};
    height: ${theme.heights.headerDesktopHeight};

    @media (max-width: ${theme.breakpoints.mobile}) {
      height: ${theme.heights.headerMobileHeight};
      padding: 20px 30px;
    }
  `}
`

export const Logo = styled.img`
  width: 240px;
  height: 32px;
  margin-top: 6px;
  :hover {
    opacity: 0.85;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 160px;
    }
  `}
`
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.desktopHeader}) {
      display: none;
    }
  `}
`
export const ItemAnchor = styled.a`
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  padding: 24px;
  color: white;
  word-break: keep-all;
  text-transform: capitalize;
  cursor: pointer;
  ${({ theme }) => css`
    :hover {
      color: ${theme.colors.secondary};
    }
  `}
`

export const ToggleMobileMenu = styled.img`
  ${({ theme }) => css`
    display: none;
    cursor: pointer;
    width: 48px;
    height: 48px;
    @media (max-width: ${theme.breakpoints.desktopHeader}) {    
      display: flex;
      }
    }
    @media (max-width: ${theme.breakpoints.mobile}) {    
      width: 32px;
      height: 32px;
    }
  `}
`

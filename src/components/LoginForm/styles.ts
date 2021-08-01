import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.grey};
  `}
  background-color: white;
  width: 100%;
  max-width: 500px;
  margin: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px 20px 15px;
`

export const Title = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 1px;
  margin: 6px 0 40px 0;
  color: black;
`

export const Forgot = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  line-height: 25px;
  margin-top: 18px;
  :hover {
    opacity: 0.8;
  }
`

export const Register = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    background: ${theme.colors.bgLight};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 25px;
    padding: 20px 0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    > a {
      color: ${theme.colors.primary};
      margin-left: 5px;
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
    }
  `}
`

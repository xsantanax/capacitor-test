import styled, { css } from 'styled-components'

type InputProps = {
  value?: string
  error?: string | boolean
  bold?: boolean
  maxWidth?: number
}

export const Container = styled.div<InputProps>`
  ${({ maxWidth }) => css`
    max-width: ${maxWidth ? maxWidth + 'px' : '100%'};
  `}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input<InputProps>`
  ${({ theme, value, error, bold }) => css`
    border: 1px solid ${error ? theme.colors.errorRed : theme.colors.grey};
    color: ${error ? theme.colors.errorRed : theme.colors.fieldTextLight};
    font-weight: ${bold || error ? 600 : 400};
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 22px;
    border-radius: 3px;
    padding: 16px;
    background-color: transparent;
    outline: none;

    :focus {
      border: 2px solid ${error ? theme.colors.errorRed : theme.colors.secondary};
      margin: -1px -1px;
    }

    &:focus + ${Label} {
      color: ${error ? theme.colors.errorRed : theme.colors.secondary};
      font-weight: bold;
      background-color: #fff;
      padding: 0 4px 0 6px;
      font-size: 12px;
      transform: translate(24px, -42px);
    }

    ${value &&
    css`
      & + ${Label} {
        color: ${error ? theme.colors.errorRed : theme.colors.fieldTextDark};
        font-weight: bold;
        background-color: #fff;
        font-size: 12px;
        padding: 0 4px 0 6px;
        transform: translate(18px, -42px);
      }
    `}
  `}
`

export const Label = styled.span<InputProps>`
  ${({ theme, error }) => css`
    color: ${error ? theme.colors.errorRed : theme.colors.fieldTextVeryLight};
  `}
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 300;
  position: absolute;
  pointer-events: none;
  transition: all linear 0.14s;
  transform: translate(20px, -12px);
`

export const ErrorContainer = styled.div`
  margin-bottom: 6px;
  margin-left: 2px;
  min-height: 18px;
  z-index: 1;
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.errorRed};
  `}
  font-size: 12px;
`

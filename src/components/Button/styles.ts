import styled, { css } from 'styled-components'

type Props = {
  outline?: boolean
  disabled?: boolean
  width?: string
  height?: string
  backgroundColor?: string
}

export const Container = styled.button<Props>`
  ${({ theme, outline, disabled, width, height, backgroundColor }) => css`
    background-color: ${backgroundColor ? backgroundColor : theme.colors.primary};
    width: ${width ? width : '100px'};
    height: ${height ? height : '42px'};
    border: none;
    outline: none;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    border-radius: 3px;

    ${disabled &&
    css`
      opacity: 0.7;
    `}

    ${!disabled &&
    css`
      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    `}

    ${outline &&
    css`
      background-color: transparent;
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};
      border-radius: 3px;
    `}
  `}
`

export const LoadingImg = styled.img`
  width: 28px;
`

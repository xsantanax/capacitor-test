import { ChangeEvent } from 'react'
import * as S from './styles'

export type Props = {
  label?: string
  value?: string
  error?: string | boolean
  bold?: boolean
  htmlType?: string
  name?: string
  maxWidth?: number
  onBlur?: (event: ChangeEvent) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: () => void
}

const Input = ({
  label,
  value,
  error,
  bold,
  htmlType = 'text',
  name,
  maxWidth,
  onBlur,
  onChange,
  onPressEnter
}: Props) => {
  const handleKeyUp = (event: React.KeyboardEvent) => {
    const ENTER_CODE = 'Enter'
    if (event.code === ENTER_CODE) {
      onPressEnter && onPressEnter()
    }
  }

  return (
    <S.Container maxWidth={maxWidth}>
      <S.Input
        value={value}
        error={error}
        bold={bold}
        type={htmlType}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onKeyUp={handleKeyUp}
      />
      <S.Label error={error}>{label}</S.Label>
      <S.ErrorContainer>{error && <S.Error>{error}</S.Error>}</S.ErrorContainer>
    </S.Container>
  )
}

export default Input

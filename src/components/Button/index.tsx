import * as S from './styles'

type Props = {
  label?: string
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  width?: string
  height?: string
  backgroundColor?: string
  onClick?: () => void
}

const Button = ({
  label,
  outline,
  loading,
  disabled,
  width,
  height,
  backgroundColor,
  onClick
}: Props) => (
  <S.Container
    type="button"
    outline={outline}
    disabled={disabled || loading}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    onClick={onClick}
  >
    {loading ? (
      <S.LoadingImg src={outline ? './img/dots.svg' : './img/dots-white.svg'} alt="Loading..." />
    ) : (
      label
    )}
  </S.Container>
)

export default Button

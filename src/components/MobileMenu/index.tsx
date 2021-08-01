import * as S from './styles'
import Link from 'next/link'
import SocialLinks from 'components/SocialLinks'

type Props = {
  regularItems: { name: string; url: string }[]
  setIsMobileMenuOpen: (value: boolean) => void
}

const MobileMenu = ({ regularItems, setIsMobileMenuOpen }: Props) => (
  <S.Container>
    {regularItems.map(({ name, url }, index) => (
      <Link key={index} href={url}>
        <S.ItemAnchor onClick={() => setIsMobileMenuOpen(false)}>{name}</S.ItemAnchor>
      </Link>
    ))}
    <SocialLinks />
  </S.Container>
)

export default MobileMenu

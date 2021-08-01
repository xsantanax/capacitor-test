import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import * as S from './styles'

const navItems = [
  { name: 'Page 1', url: '/page-1' },
  { name: 'Page 2', url: '/page-2' },
  { name: 'Page 3', url: '/page-3' }
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <S.Container>
      <Link href="/">
        <a onClick={() => setIsMobileMenuOpen(false)}>
          <S.Logo src="/img/politik-long-logo.svg" alt="Politik Logo" />
        </a>
      </Link>
      <S.NavItems>
        {navItems.map(({ name, url }, index) => (
          <Link key={index} href={url}>
            <S.ItemAnchor>{name}</S.ItemAnchor>
          </Link>
        ))}
      </S.NavItems>
      <S.ToggleMobileMenu
        src={isMobileMenuOpen ? '/img/close.png' : '/img/menu.png'}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      {isMobileMenuOpen && (
        <MobileMenu regularItems={navItems} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
      {/* {isMobileMenuOpen && (
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (max-width: 1000px) { body { overflow:hidden } } `
          }}
        />
      )} */}
    </S.Container>
  )
}

export default Header

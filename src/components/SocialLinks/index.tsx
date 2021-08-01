import * as S from './styles'
import Link from 'next/link'

const SocialLinks = () => (
  <S.Container>
    <S.SocialLink>
      <Link href="https://www.facebook.com/">
        <a target="_blank">
          <img src="/img/social-facebook.svg" />
        </a>
      </Link>
    </S.SocialLink>

    <S.SocialLink>
      <Link href="https://twitter.com/">
        <a target="_blank">
          <img src="/img/social-twitter.svg" />
        </a>
      </Link>
    </S.SocialLink>

    <S.SocialLink>
      <Link href="https://www.linkedin.com/">
        <a target="_blank">
          <img src="/img/social-linkedin.svg" />
        </a>
      </Link>
    </S.SocialLink>

    <S.SocialLink>
      <Link href="https://www.instagram.com/">
        <a target="_blank">
          <img src="/img/social-instagram.svg" />
        </a>
      </Link>
    </S.SocialLink>
  </S.Container>
)

export default SocialLinks

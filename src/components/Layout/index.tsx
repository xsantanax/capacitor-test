import React from 'react'
import Header from '../Header'
import * as S from './styles'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <S.Container>
    <Header />
    <S.ChildrenWrap>{children}</S.ChildrenWrap>
  </S.Container>
)

export default Layout

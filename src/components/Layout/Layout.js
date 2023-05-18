import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { Main } from '../Main'

function Layout ({ children }) {
  return (
    <>
        <Menu/>
          <Main>
          { children }
          </Main>
        <Header/>
    </>
  )
}

export { Layout }
import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

function Layout ({ children }) {
  return (
    <>
        <Menu/>
        { children }
        <Header/>
    </>
  )
}

export { Layout }
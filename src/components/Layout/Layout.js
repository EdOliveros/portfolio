import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

function Layout ({ children }) {
  return (
    <div>
        <Menu/>
        { children }
        <Header/>
    </div>
  )
}

export { Layout }
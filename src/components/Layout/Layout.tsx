import React from 'react'
import LayoutInterface from '../../interfaces/LayoutInterface'

const Layout = ({ noNav, noFooter, children }: LayoutInterface) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
export default Layout

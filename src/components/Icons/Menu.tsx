import React from 'react'
import { IIcon } from './types'

const Menu = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path fill="#FF963C" d="M0 0H32V32H0z" opacity="0.01"></path>
      <path stroke="#FF963C" strokeWidth="3" d="M3 8h26M3 16h26M3 24h26"></path>
    </svg>
  )
}

export default Menu

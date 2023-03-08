import React from 'react'
import { IIcon } from './types'

const Scroll = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#fff"
        fillOpacity="0.01"
        stroke="#777"
        d="M24 .5C36.979.5 47.5 11.021 47.5 24S36.979 47.5 24 47.5.5 36.979.5 24 11.021.5 24 .5z"
      ></path>
      <path
        fill="#777"
        d="M30.585 28.042L24 21.658l-6.585 6.384-.876-.85L24 19.96l7.462 7.233-.877.85z"
      ></path>
    </svg>
  )
}

export default Scroll

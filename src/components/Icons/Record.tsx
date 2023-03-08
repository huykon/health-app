import React from 'react'
import { IIcon } from './types'

const Record = (props: IIcon) => {
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
      <path
        fill="#FF963C"
        d="M29.55 10.665l-.993-.991a1.54 1.54 0 00-2.178 0l-.927.928 3.169 3.17.928-.928c.6-.602.6-1.577 0-2.179zM16.76 19.287v3.17h3.17l7.827-7.829-3.17-3.169-7.827 7.828z"
      ></path>
      <path
        fill="#FF963C"
        d="M9.347 9.934H18.299V11.425999999999998H9.347z"
      ></path>
      <path fill="#FF963C" d="M9.347 15.398H18.299V16.89H9.347z"></path>
      <path
        fill="#FF963C"
        d="M9.366 20.863H14.835999999999999V22.355H9.366z"
      ></path>
      <path
        fill="#FF963C"
        d="M22.586 26.599a.413.413 0 01-.409.414H5.367a.414.414 0 01-.409-.415V5.404a.414.414 0 01.409-.416h16.81a.413.413 0 01.409.416v5.987l1.958-1.987v-4C24.543 4.076 23.486 3 22.177 3H5.367C4.059 3.001 3 4.076 3 5.403v21.196c.001 1.326 1.06 2.4 2.367 2.401h16.81c1.31-.001 2.366-.225 2.367-1.552v-7.5l-1.958 1.988v4.663z"
      ></path>
    </svg>
  )
}

export default Record

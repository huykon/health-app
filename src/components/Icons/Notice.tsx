import React from 'react'
import { IIcon } from './types'

const Notice = (props: IIcon) => {
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
        fillRule="evenodd"
        d="M28.5 25.297H16.072l-8 5.703v-5.703H3.5V3h25v22.297zM26.214 5.273H5.786v17.754h4.572v3.55l4.98-3.55h10.876V5.272zm-8.85 8.119v6.534h-2.63V13.39h2.63zm-1.316-1.96c.908 0 1.643-.731 1.643-1.633s-.735-1.634-1.643-1.634c-.907 0-1.644.732-1.644 1.634 0 .902.736 1.633 1.644 1.633z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Notice

import React from 'react'
import { IIcon } from './types'

const MealSnack = (props: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="136"
      fill="none"
      viewBox="0 0 136 136"
      {...props}
    >
      <g clipPath="url(#clip0_0_98)">
        <path
          fill="url(#paint0_linear_0_98)"
          d="M10 34.5L68 1l58 33.5v67L68 135l-58-33.5v-67z"
        ></path>
        <path fill="#fff" d="M40 32H96V88H40z" opacity="0.01"></path>
        <g clipPath="url(#clip1_0_98)">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M85 44.046c-2.215 0-4.096-1.739-4.096-4.046H55.149c0 2.304-1.933 4.046-4.149 4.046v2.621h34v-2.62zM52.7 50l5.207 30H78.2l5.1-30h-30.6zm26.586 3.326L78.152 60H57.954l-1.134-6.674h22.466zM60.787 76.667L59.653 70h16.8l-1.133 6.667H60.787z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_98"
          x1="35.956"
          x2="157.019"
          y1="166.202"
          y2="119.302"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCC21"></stop>
          <stop offset="1" stopColor="#FF963C"></stop>
        </linearGradient>
        <clipPath id="clip0_0_98">
          <path fill="#fff" d="M0 0H136V136H0z"></path>
        </clipPath>
        <clipPath id="clip1_0_98">
          <path
            fill="#fff"
            d="M0 0H34V40H0z"
            transform="translate(51 40)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default MealSnack

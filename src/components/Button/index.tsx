import React from 'react'

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  btnType?: 'primary'
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, btnType, className, ...rest } = props
  const typeClass = btnType === 'primary' ? 'bg-btn-primary text-light' : ''
  return (
    <button
      className={`font-noto_sans text-[18px] leading-[26px] ${typeClass} ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button

import React from 'react'

interface ICircularProgressBar {
  sqSize: number
  strokeWidth: number
  percentage: number
  children: JSX.Element | JSX.Element[]
}

const CircularProgressBar: React.FC<ICircularProgressBar> = ({
  sqSize,
  strokeWidth,
  percentage,
  children,
}) => {
  const radius = (sqSize - strokeWidth) / 2
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`}>
      <circle
        className="fill-none stroke-none"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-light stroke-linecap drop-shadow-[0_0px_6px_#FC7400]"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      {children}
    </svg>
  )
}
export default CircularProgressBar

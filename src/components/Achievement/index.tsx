import React from 'react'
import CircularProgressBar from '../CircularProgressBar'

const Achievement: React.FC = () => {
  return (
    <div className="relative w-full h-[316px] max-w-auto md:max-w-[42%] bg-hero-pattern bg-no-repeat bg-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CircularProgressBar sqSize={181} percentage={75} strokeWidth={4}>
          <text
            className="fill-light text-[18px] leading-[22px] drop-shadow-[0_0px_6px_#FC7400] font-normal"
            x="35%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            05/21
          </text>
          <text
            className="fill-light text-[25px] leading-[30px] drop-shadow-[0_0px_6px_#FCA500] font-normal"
            x="64%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          >
            75%
          </text>
        </CircularProgressBar>
      </div>
    </div>
  )
}

export default Achievement

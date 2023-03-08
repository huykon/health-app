import React from 'react'
import Achievement from '../Achievement'
import BodyGraph from '../BodyGraph'
import Meal from '../Meal'

const TopPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <Achievement />
        <div className="w-full h-[316px] max-w-auto md:max-w-[58%] bg-dark-500">
          <BodyGraph />
        </div>
      </div>
      <Meal />
    </div>
  )
}

export default TopPage

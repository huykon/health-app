import React, { useMemo, useState } from 'react'
import MealKnife from '../Icons/MealKnife'
import MealSnack from '../Icons/MealSnack'
import Button from '../Button'

const dataMeals = [
  {
    id: 1,
    type: 1,
    name: '05.21.Morning',
    image: '/images/m01.jpg',
  },
  {
    id: 2,
    type: 2,
    name: '05.21.Lunch',
    image: '/images/l03.jpg',
  },
  {
    id: 3,
    type: 3,
    name: '05.21.Dinner',
    image: '/images/d01.jpg',
  },
  {
    id: 4,
    type: 4,
    name: '05.21.Snack',
    image: '/images/l01.jpg',
  },
  {
    id: 5,
    type: 1,
    name: '05.21.Morning',
    image: '/images/m01.jpg',
  },
  {
    id: 6,
    type: 2,
    name: '05.21.Lunch',
    image: '/images/l02.jpg',
  },
  {
    id: 7,
    type: 4,
    name: '05.21.Snack',
    image: '/images/d02.jpg',
  },
  {
    id: 8,
    type: 3,
    name: '05.21.Dinner',
    image: '/images/s01.jpg',
  },
  {
    id: 9,
    type: 1,
    name: '05.21.Morning',
    image: '/images/m03.jpg',
  },
  {
    id: 10,
    type: 2,
    name: '05.21.Lunch',
    image: '/images/m02.jpg',
  },
]

const Meal: React.FC = () => {
  const [type, setType] = useState<number>(0) //1: morning, 2:lunch, 3: dinner, 4:snack
  const [isFull, setIsFull] = useState<boolean>(false)

  const onSelectType = (num: number) => {
    if (type === num) {
      setType(0)
    } else {
      setType(num)
    }
  }

  const dataMemoize = useMemo(() => {
    const fullData = type
      ? dataMeals.filter((meal) => meal.type === type)
      : dataMeals
    return !isFull ? fullData.slice(0, 8) : fullData
  }, [type, isFull])

  return (
    <div className="mt-[22px] mb-16 xl:max-w-[960px] mx-auto">
      <ul className="flex flex-wrap md:flex-wrap justify-center gap-3 md:gap-x-[64px]">
        <li className="relative cursor-pointer" onClick={() => onSelectType(1)}>
          <MealKnife />
          <span className="text-center text-light absolute bottom-[27px] left-1/2 -translate-x-1/2 text-[20px] leading-[24px]">
            Morning
          </span>
        </li>
        <li className="relative cursor-pointer" onClick={() => onSelectType(2)}>
          <MealKnife />
          <span className="text-center text-light absolute bottom-[27px] left-1/2 -translate-x-1/2 text-[20px] leading-[24px]">
            Lunch
          </span>
        </li>
        <li className="relative cursor-pointer" onClick={() => onSelectType(3)}>
          <MealKnife />
          <span className="text-center text-light absolute bottom-[27px] left-1/2 -translate-x-1/2 text-[20px] leading-[24px]">
            Dinner
          </span>
        </li>
        <li className="relative cursor-pointer" onClick={() => onSelectType(4)}>
          <MealSnack />
          <span className="text-center text-light absolute bottom-[27px] left-1/2 -translate-x-1/2 text-[20px] leading-[24px]">
            Snack
          </span>
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-[25px] auto-rows-[1fr]">
        {dataMemoize.map((meal) => (
          <div
            key={meal.id}
            className="bg-cover min-h-[234px] relative"
            style={{ backgroundImage: `url(${meal.image})` }}
          >
            <h5 className="absolute bottom-0 left-0 bg-primary-300 text-light text-[15px] leading-[18px] px-2 py-[7px] tracking-[0.15px] min-w-[120px]">
              {meal.name}
            </h5>
          </div>
        ))}
      </div>
      <Button
        btnType="primary"
        className="min-w-[296px] py-1 pt-[14px] pb-[16px] mt-7 mx-auto rounded-md block"
        onClick={() => setIsFull(true)}
      >
        記録をもっと見る
      </Button>
    </div>
  )
}

export default Meal

import React from 'react'

const dataExperience = [
  {
    id: 1,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 2,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 3,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 4,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 5,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 6,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 7,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
  {
    id: 8,
    title: '家事全般（立位・軽い）',
    kcal: '26kcal',
    time: '10 min',
  },
]

const MyExperience: React.FC = () => {
  return (
    <>
      <div className="mb-1">
        <div className="inline-block text-[15px] leading-[18px] font-normal tracking-[0.15px] max-w-[96px]">
          MY EXERCISE
        </div>
        <span className="text-[22px] leading-[27px] tracking-[0.11px]">
          2021.05.21
        </span>
      </div>
      <div className="flex gap-x-10 flex-col md:flex-row w-full max-h-48 overflow-auto scrollBar pr-6 -mr-6">
        <ul className="w-full">
          {dataExperience?.map((exp, index) => (
            <li
              key={exp.id}
              className={`border-b border-gray-400 flex justify-between pl-4 relative ${
                index !== 0 ? 'mt-2' : ''
              }
             before:content-[''] before:w-1 before:h-1 before:bg-light before:left-0 before:absolute before:top-2 before:rounded`}
            >
              <div className="tracking-[0.075px] mr-auto">
                <p className="font-noto_sans text-[15px] leading-[22px] font-light">
                  {exp?.title}
                </p>
                <p className="text-primary-300">{exp?.kcal}</p>
              </div>
              <b className="text-primary-300 text-[18px] leading-[22px] font-normal tracking-[0.09px]">
                {exp?.time}
              </b>
            </li>
          ))}
        </ul>
        <ul className="w-full">
          {dataExperience?.map((exp, index) => (
            <li
              key={exp.id}
              className={`border-b border-gray-400 flex justify-between pl-4 relative ${
                index !== 0 ? 'mt-2' : ''
              }
             before:content-[''] before:w-1 before:h-1 before:bg-light before:left-0 before:absolute before:top-2 before:rounded`}
            >
              <div className="tracking-[0.075px] mr-auto">
                <p className="font-noto_sans text-[15px] leading-[22px] font-light">
                  {exp?.title}
                </p>
                <p className="text-primary-300">{exp?.kcal}</p>
              </div>
              <b className="text-primary-300 text-[18px] leading-[22px] font-normal tracking-[0.09px]">
                {exp?.time}
              </b>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MyExperience

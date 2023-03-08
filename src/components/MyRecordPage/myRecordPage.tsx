import React, { useMemo, useRef, useState } from 'react'
import BodyGraph from '../BodyGraph'
import MyExperience from '../MyExperience'
import Button from '../Button'

const diaryData = [
  {
    id: 1,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 2,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 3,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 4,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 5,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 6,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 7,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 8,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 9,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
  {
    id: 10,
    date: '2021.05.21 23:25',
    description: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
  },
]

const MyRecordPage: React.FC = () => {
  const [isFull, setIsFull] = useState<boolean>(false)
  const graphRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const diaryRef = useRef<HTMLDivElement>(null)

  const dataMemoize = useMemo(() => {
    return !isFull ? diaryData.slice(0, 8) : diaryData
  }, [isFull])

  return (
    <div className="container mx-auto xl:max-w-[960px] mb-16">
      <div className="flex flex-col md:flex-row items-center mt-14 gap-y-4 md:gap-x-12">
        <div
          className="bg-primary-300 p-6"
          onClick={() =>
            graphRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        >
          <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/MyRecommend-1.jpg')] bg-left-top h-[240px] w-[240px] flex flex-col items-center justify-center cursor-pointer">
            <h4 className="text-[25px] leading-[30px] tracking-[0.125px] font-normal text-primary-300 uppercase">
              BODY RECORD
            </h4>
            <b className="bg-primary-400 text-light min-w-[160px] text-center font-noto_sans text-[14px] leading-[20px] font-light h-6 mt-2.5">
              自分のカラダの記録
            </b>
          </div>
        </div>
        <div
          className="bg-primary-300 p-6"
          onClick={() =>
            experienceRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        >
          <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/MyRecommend-2.jpg')] bg-left-bottom bg-cover h-[240px] w-[240px] flex flex-col items-center justify-center cursor-pointer">
            <h4 className="text-[25px] leading-[30px] tracking-[0.125px] font-normal text-primary-300 uppercase">
              MY EXERCISE
            </h4>
            <b className="bg-primary-400 text-light min-w-[160px] text-center font-noto_sans text-[14px] leading-[20px] font-light h-6 mt-2.5">
              自分の運動の記録
            </b>
          </div>
        </div>
        <div
          className="bg-primary-300 p-6"
          onClick={() =>
            diaryRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        >
          <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/MyRecommend-3.jpg')] bg-left-bottom bg-cover h-[240px] w-[240px] flex flex-col items-center justify-center cursor-pointer">
            <h4 className="text-[25px] leading-[30px] tracking-[0.125px] font-normal text-primary-300 uppercase">
              MY DIARY
            </h4>
            <b className="bg-primary-400 text-light min-w-[160px] text-center font-noto_sans text-[14px] leading-[20px] font-light h-6 mt-2.5">
              自分の日記
            </b>
          </div>
        </div>
      </div>
      <div className="bg-dark-500 text-light mt-14" ref={graphRef}>
        <BodyGraph />
      </div>
      <div
        className="bg-dark-500 text-light mt-14 px-4 py-6"
        ref={experienceRef}
      >
        <MyExperience />
      </div>
      <div className="mt-14" ref={diaryRef}>
        <h3 className="tracking-[0.11px] text-[22px] leading-[27px]">
          MY DIARY
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 font-noto_sans text-dark-500 text-[12px] leading-[17px] font-light tracking-[0.06px]">
          {dataMemoize?.map((diary) => (
            <div className="border-2 border-gray-500 p-4" key={diary?.id}>
              <h4 className="font-inter tracking-[0.09px] text-[18px] leading-[22px] font-normal mb-2 max-w-[145px]">
                {diary.date}
              </h4>
              <p>{diary.description}</p>
            </div>
          ))}
        </div>
        <Button
          btnType="primary"
          className="min-w-[296px] py-1 pt-[14px] pb-[16px] mt-7 mx-auto rounded-md block"
          onClick={() => setIsFull(true)}
        >
          自分の日記をもっと見る
        </Button>
      </div>
    </div>
  )
}

export default MyRecordPage

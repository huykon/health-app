import React, { useMemo, useState } from 'react'
import Button from '../Button'

const recommendHeadData = [
  {
    id: 1,
    title: 'RECOMMENDED COLUMN',
    note: 'オススメ',
  },
  {
    id: 2,
    title: 'RECOMMENDED DIET',
    note: 'ダイエット',
  },
  {
    id: 3,
    title: 'RECOMMENDED BEAUTY',
    note: '美容',
  },
  {
    id: 4,
    title: 'RECOMMENDED HEALTH',
    note: '健康',
  },
]

const recommendListData = [
  {
    id: 1,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-1.jpg',
  },
  {
    id: 2,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-2.jpg',
  },
  {
    id: 3,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-3.jpg',
  },
  {
    id: 4,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-4.jpg',
  },
  {
    id: 5,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-5.jpg',
  },
  {
    id: 6,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-6.jpg',
  },
  {
    id: 7,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-7.jpg',
  },
  {
    id: 8,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-8.jpg',
  },
  {
    id: 9,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-4.jpg',
  },
  {
    id: 10,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    description: '#魚料理 #和食 #DHA',
    time: '2021.05.17   23:25',
    image: '/images/column-2.jpg',
  },
]

const ColumnPage: React.FC = () => {
  const [isFull, setIsFull] = useState<boolean>(false)

  const dataMemoize = useMemo(() => {
    return !isFull ? recommendListData.slice(0, 8) : recommendListData
  }, [isFull])

  return (
    <div className="container mx-auto xl:max-w-[960px] mt-14 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recommendHeadData.map((recommend) => (
          <div className="bg-dark-600 text-center py-6 px-2" key={recommend.id}>
            <h6 className="uppercase tracking-[0.11px] text-[22px] leading-[27px] text-primary-300">
              {recommend?.title}
            </h6>
            <hr className="max-w-[56px] mx-auto mt-2.5 mb-2 text-light" />
            <p className="text-light text-[18px] leading-[26px] font-noto_sans">
              {recommend?.note}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 mt-14">
        {dataMemoize?.map((recommend) => (
          <div key={recommend?.id}>
            <div className="relative">
              <img src={recommend?.image} alt={recommend?.description} />
              <p className="bg-primary-300 text-light inline-block absolute bottom-0 left-0 px-2 text-[15px] leading-[30px] font-normal">
                {recommend?.time}
              </p>
            </div>
            <h4 className="text-[15px] leading-[22px] tracking-[0.075px] font-light text-dark-500 mt-2">
              {recommend?.title}
            </h4>
            <h6 className="text-primary-400 text-[12px] leading-[22px] tracking-[0.06px] font-light">
              {recommend?.description}
            </h6>
          </div>
        ))}
      </div>
      <Button
        btnType="primary"
        className="min-w-[296px] py-1 pt-[14px] pb-[16px] mt-7 mx-auto rounded-md block"
        onClick={() => setIsFull(true)}
      >
        コラムをもっと見る
      </Button>
    </div>
  )
}

export default ColumnPage

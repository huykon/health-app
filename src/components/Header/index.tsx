import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Icons/Logo'
import Record from '../Icons/Record'
import Challenge from '../Icons/Challenge'
import Notice from '../Icons/Notice'
import Menu from '../Icons/Menu'
import Close from '../Icons/Close'
import Button from '../Button'

const Header: React.FC = () => {
  const [isVisibleMenuDraw, setIsVisibleMenuDraw] = useState<boolean>(false)
  const location = useLocation()
  const isMyRecord = location?.pathname === '/my-record'

  return (
    <div className="w-full h-[64px] bg-dark-500 fixed shadow-[0_3px_6px_rgba(0,0,0,0.160784)] z-10">
      <div className="container mx-auto h-full xl:max-w-[960px]">
        <div className="flex justify-between items-center h-full relative">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
          <ul className="font-noto_sans flex items-center text-light ml-auto text-[16px] leading-[23px] font-light gap-x-[24px]">
            <li>
              <Link
                to="/my-record"
                className={`flex items-center ${
                  isMyRecord ? 'text-primary-400' : ''
                }`}
              >
                <Record className="inline-block" />
                <span className="ml-2">自分の記録</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center">
                <Challenge className="inline-block" />
                <span className="ml-2">チャレンジ</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center relative">
                <Notice className="inline-block" />
                <span className="w-4 h-4 rounded-full text-center bg-primary-500 text-light absolute font-inter font-normal text-[10px] leading-[12px] flex items-center justify-center left-[21px] -top-[3px]">
                  1
                </span>
                <span className="ml-2">お知らせ</span>
              </Link>
            </li>
          </ul>
          <Button
            className="ml-10"
            onClick={() => setIsVisibleMenuDraw(!isVisibleMenuDraw)}
          >
            {isVisibleMenuDraw ? <Close /> : <Menu />}
          </Button>
          {isVisibleMenuDraw && (
            <ul className="font-noto_sans absolute right-0 top-16 bg-gray-400 text-light min-w-[280px]">
              <li className="border-b border-dark-600 border-opacity-25">
                <Link
                  to="/my-record"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  自分の記録
                </Link>
              </li>
              <li className="border-b border-dark-600 border-opacity-25">
                <Link
                  to="/"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  体重グラフ
                </Link>
              </li>
              <li className="border-b border-dark-600 border-opacity-25">
                <Link
                  to="/"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  目標
                </Link>
              </li>
              <li className="border-b border-dark-600 border-opacity-25">
                <Link
                  to="/"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  選択中のコース
                </Link>
              </li>
              <li className="border-b border-dark-600 border-opacity-25">
                <Link
                  to="/column-page"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  コラム一覧
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-[23px] px-[32px] text-[18px] leading-[26px] font-light"
                  onClick={() => setIsVisibleMenuDraw(false)}
                >
                  設定
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

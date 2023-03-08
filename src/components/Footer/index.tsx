import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="bg-dark-500 font-noto_sans text-light py-[56px]">
      <div className="container mx-auto">
        <ul className="flex gap-x-[45px] text-[11px] leading-[16px] font-light tracking-[0.033px]">
          <li>会員登録</li>
          <li>運営会社</li>
          <li>利用規約</li>
          <li>個人情報の取扱について</li>
          <li>特定商取引法に基づく表記</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

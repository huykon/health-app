import React, { useLayoutEffect, useState } from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Button from '../Button'
import Scroll from '../Icons/Scroll'

const Layout = () => {
  const [isVisibleBtnScroll, setIsVisibleBtnScroll] = useState<boolean>(false)

  const onScrollToTop = () => {
    globalThis.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }

  const buttonScrollToTop = (
    <Button
      onClick={onScrollToTop}
      className="fixed top-1/2 right-1 md:right-24"
    >
      <Scroll />
    </Button>
  )

  const onScrollPage = () => {
    if (globalThis.scrollY > 250) {
      setIsVisibleBtnScroll(true)
    } else {
      setIsVisibleBtnScroll(false)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScrollPage, { passive: true })

    return () => window.removeEventListener('scroll', onScrollPage)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-[64px]">
        <Outlet />
      </main>
      {isVisibleBtnScroll && buttonScrollToTop}
      <Footer />
    </>
  )
}

export default Layout

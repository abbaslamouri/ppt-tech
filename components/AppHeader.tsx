'use client'

import Branding from './Branding'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Burger from './Burger'
import Navigation from './Navigation'

const AppHeader = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    {
      path: '/fixtures',
      label: 'Fixtures',
      children: [
        { path: '/quadz', label: 'Quadz' },
        { path: '/barz', label: 'Barz' },
        { path: '/slimz', label: 'Slimz' },
      ],
    },
    {
      path: '/accessories',
      label: 'Accessories',
      children: [
        { path: '/controls', label: 'Controls' },
        { path: '/cords', label: 'cords' },
      ],
    },
    { path: '/contact', label: 'Contact us' },
    { path: '/about', label: 'About us' },
  ]

  const [showMobileNav, setShowMobileNav] = useState<boolean>(true)

  const updateShowMobileNav = (burgerButtonState: boolean) => {
    console.log('KKKKKK')
    setShowMobileNav(burgerButtonState)
    console.log(showMobileNav)
  }

  return (
    <header
      className={cn(' sticky top-0 backdrop-blur h-[var(--header-height)] flex items-center bg-gray-100/70 z-10 ')}
    >
      <div className="container ">
        <div className="flex justify-between ">
          <Branding />
          <div className={cn('hidden   flex-1 lg:flex justify-end', {})}>
            <Navigation navLinks={navLinks} />
          </div>
          <div className="flex items-center gap-4">
            <Burger updateShowMobileNav={updateShowMobileNav} />
          </div>
        </div>
      </div>
      <div
        className={cn(
          ' absolute left-0 top-full w-full h-[75vh] bg-gray-950 text-white lg:relative lg:top-0  lg:text-gray-900 lg:hidden',
          { hidden: showMobileNav }
        )}
      >
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  )
}

export default AppHeader

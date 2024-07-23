'use client'

import { useState } from 'react'

// interface BurgerProps {
//   updateShowMobileNav: (burgerButtonState: boolean) => void
// }

const Burger = ({
  burgerBtnState,
  updateBurgerBtnState,
}: // updateShowMobileNav,
{
  burgerBtnState: boolean
  updateBurgerBtnState: (state: boolean) => void
  // updateShowMobileNav: (state: boolean) => void
}) => {
  // const [burgerBtnState, setBurgerBtnState] = useState(false)

  return (
    <button
      className="burger w-[24px] h-[calc(2*var(--burger-bar-gap)+3*var(--burger-bar-height))] lg:hidden"
      aria-expanded={burgerBtnState ? 'true' : 'false'}
      type="button"
      aria-haspopup="true"
      aria-label={burgerBtnState ? 'Show nav menu' : 'Hide nav menu'}
      onClick={() => {
        updateBurgerBtnState(!burgerBtnState)
        // updateShowMobileNav(burgerBtnState)
        // console.log(burgerBtnState)
      }}
    >
      <span
        className="burger-bar block relative h-[var(--burger-bar-height)] bg-gray-600 transition-all duration-250 ease-in-out before:content-[''] before:absolute before:left-0  before:w-full before:bg-gray-600 before:h-[var(--burger-bar-height)] before:top-[calc(-1*var(--burger-bar-gap))] after:content-[''] after:absolute after:left-0  after:w-full after:bg-gray-600 after:h-[var(--burger-bar-height)] after:top-[calc(var(--burger-bar-gap))]
      "
      ></span>
      <span className="sr-only">{burgerBtnState ? 'Open Navbar' : 'Close Navbar'}</span>
    </button>
  )
}

export default Burger

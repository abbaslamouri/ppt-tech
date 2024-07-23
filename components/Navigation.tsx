'use client'

import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// ({ updateShowMobileNav }: { updateShowMobileNav: (burgerButtonState: boolean) => void }

const Navigation = ({
  navLinks,
  updateShowMobileNav,
}: {
  navLinks: { path: string; label: string; children?: { path: string; label: string }[] }[]
  updateShowMobileNav: (burgerButtonState: boolean) => void
}) => {
  const [chevronStates, setChevronStates] = useState<string[]>([])

  const updateChevronState = (index: number, orientation: string) => {
    setChevronStates((prev) => {
      const newArr = [...prev]
      newArr[index] = orientation
      return newArr
    })
  }

  return (
    <nav className={cn(`text-sm   `)}>
      <ul className={cn(`flex flex-col items-center py-8 lg:flex-row lg:py-0 `)}>
        {navLinks.map((navLink, i: number) =>
          navLink.children?.length ? (
            <li
              className=" group px-8 py-2  relative "
              key={i}
              onMouseEnter={() => updateChevronState(i, 'up')}
              onMouseLeave={() => updateChevronState(i, 'down')}
            >
              <button className="flex gap-1 items-center cursor-auto">
                <span className="uppercase relative  ">{navLink.label}</span>
                <ChevronUp
                  size={16}
                  className={cn('hidden lg:block absolute top-2.5 right-3 transition-all duration-250 ease-in-out', {
                    'rotate-180': chevronStates[i] === 'down',
                    'rotate-0': chevronStates[i] === 'up',
                  })}
                />
              </button>
              <div
                className={cn(
                  '  relative  text-xs lg:absolute [&>*]:overflow-visible left-0 top-full w-full   grid lg:grid-rows-[0] lg:[&>*]:overflow-hidden group-hover:grid-rows-1 transition-all duration-250 ease-in-out  lg:bg-gray-100 lg:pl-4'
                )}
              >
                <ul className="">
                  {navLink.children?.map((child, j: number) => (
                    <li className="px-4 py-2 " key={j}>
                      <Link
                        href={child?.path}
                        onClick={() => {
                          updateShowMobileNav(true)
                        }}
                      >
                        <span className="uppercase ">{child?.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li className="px-4 py-2 relative" key={i}>
              <Link
                href={navLink.path}
                onClick={() => {
                  updateShowMobileNav(true)
                }}
              >
                <span className="uppercase text-sm">{navLink.label}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Navigation

'use client'

// import CustomLink from './CustomeLink'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'
// import { useMessages } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

const Navigation = ({
  navLinks,
}: {
  navLinks: { path: string; label: string; children?: { path: string; label: string }[] }[]
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
                  // { ' hidden': !showMobileNav, 'lg:visible': true }
                )}
              >
                {/* {JSON.stringify(navLink)} */}
                <ul className="">
                  {navLink.children?.map((child, j: number) => (
                    <li className="px-4 py-2 " key={j}>
                      <Link href={child?.path}>
                        <span className="uppercase ">{child?.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li className="px-4 py-2 relative" key={i}>
              <Link href={navLink.path}>
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

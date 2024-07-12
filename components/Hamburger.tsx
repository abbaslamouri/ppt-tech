'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

const Hamburger = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <Button variant="ghost" onClick={() => setOpen((prev) => !prev)}>
        <Menu />
      </Button>

      {open && (
        <div className="absolute bg-gray-900 text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">logout</Link>
          <Link href="/">cart</Link>
        </div>
      )}
    </div>
  )
}

export default Hamburger

'use client'

import Image from 'next/image'
import PPFLogo from '@/public/ppf-tech-logo-300x93.png'
import Link from 'next/link'

const Branding = () => {
  return (
    <Link className="block  w-[140px] h-[35px]" href="/">
      <div className="relative size-full -translate-x-3">
        <Image
          src={PPFLogo}
          width={200}
          style={{
            objectFit: 'contain',
          }}
          alt="PPF Tech Logo Image"
        />
      </div>
    </Link>
  )
}

export default Branding

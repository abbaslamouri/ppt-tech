'use client'

import Image from 'next/image'
import PPFLogo from '@/public/ppf-tech-logo-300x93.png'
import Link from 'next/link'

const Branding = () => {
  return (
    // <div className="h-20 border-black ">
    <Link className="block  w-[140px] h-[35px]" href="/">
      {/* <div className="w-24 border-black">
        <Image className="object-contain w-auto size-full" src={logo} alt="PPF Tech Logo Image" fill />
      </div> */}

      <div className="relative size-full -translate-x-3">
        <Image
          src={PPFLogo}
          sizes="200px"
          fill
          priority
          style={{
            objectFit: 'contain',
          }}
          alt="PPF Tech Logo Image"
        />
      </div>
    </Link>
    // </div>
  )
}

export default Branding

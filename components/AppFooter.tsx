import Link from 'next/link'
// import CustomLink from './CustomeLink'

const Footer = () => {
  return (
    <footer className="bg-gray-100 h-[--footer-height]">
      <div className="container h-full">
        <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="">{new Date().getFullYear()} — PPF Tech | All rights reserved</p>
          <div className="flex justify-center gap-4">
            <Link href="warranty">
              <span className="capitalize text-primary-40 underline">Warranty</span>
            </Link>
            <Link href="privacy">
              <span className="capitalize text-primary-40 underline">Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

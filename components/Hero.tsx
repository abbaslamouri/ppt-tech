import Image from 'next/image'
import heroImage from '@/public/PPF-Tech-HG660-FS3-Angle-Transparent-600.png'
import Link from 'next/link'
// import { Button } from './ui/button'
import { Check, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const hero = {
    headline: 'PPF Tech',
    title: 'Global lighting and horticultural professionals delivering:',
    list: {
      line1: 'Application-specific grow light solutions',
      line2: 'Cross-compatible CMH and LED fixture designs',
      line3: 'Lowest total cost of ownership',
      line4: 'Exceptional service',
    },
    actions: {
      products: 'Our products',
      services: 'Our services',
    },
  }
  return (
    <article
      className="  min-h-[400px] bg-gray-600 bg-blend-multiply "
      style={{
        backgroundImage: `url("/PPF-Tech-HG660-Application-1200.jpg")`,
      }}
    >
      <div className="container  ">
        <div className=" py-16  space-y-8 ">
          <div className="">
            <p className="text-primary-70 uppercase tracking-widest"> {hero?.headline}</p>
            <h1 className="text-5xl text-white max-w-[30ch] leading-[1] font-bold">{hero?.title}</h1>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className=" col-span-12 lg:col-span-8">
              <div className="space-y-6">
                <ul className="text-gray-200  space-y-2">
                  {Object.values(hero?.list)?.map((item: any, i: number) => (
                    <li className=" flex items-center gap-2" key={i}>
                      {/* <div className="flex flex-wrap items-center gap-2"> */}
                      <Check className="size-4" />
                      {<span className="">{item} </span>}
                      {/* </div> */}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-6">
                  {/* <li className=""> */}
                  <Button className="t" asChild>
                    <Link className="flex items-center gap-2" href="#products">
                      <span> {hero?.actions?.products}</span>
                      {/* <MoveRight className="size-4" /> */}
                    </Link>
                  </Button>
                  {/* </li>
                  <li className=""> */}
                  <Button className="bg-Transparent text-white " asChild variant="outline">
                    <Link className="flex items-center gap-2" href="#services">
                      <span> {hero?.actions?.services}</span>
                      {/* <MoveRight className="size-4" /> */}
                    </Link>
                  </Button>
                  {/* </li> */}
                </div>
              </div>
            </div>
            <div className="flex items-center col-span-12 lg:col-span-4">
              <Image className="w-auto object-contain" src={heroImage} alt="PPF Tech Logo Image" sizes="100%" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Hero

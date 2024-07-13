import Image from 'next/image'
// import { useTranslations, useMessages } from 'next-intl'
import { Check, MoveRight } from 'lucide-react'
import Link from 'next/link'
import heroImage from '@/public/PPF-Tech-HG660-FS3-Angle-Transparent-600.png'
import headingImage from '@/public/Quadz-Name-Color.png'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Span } from 'next/dist/trace'
import { Separator } from '@/components/ui/separator'

const Quadz = () => {
  // const t = useTranslations('nav')
  // const messages: any = useMessages()

  const quadz = {
    title: 'QUADZ',
    subTitle: 'Indoor grid or racked',
    list: [
      'Maximized µmol per watt',
      'Optimized spectrum',
      'Power eco-link',
      'Control eco-link',
      'Wide, uniform light distribution',
      'Strong light penetration',
      '5 year warranty',
    ],
    table: [
      {
        model: 'HG940 PRO FS3',
        'Input(W)': '940',
        'PPF(umol/m2/s)': '2,570',
        Spectrum: 'Full 4K',
        Bars: '8',
        Dimming: '0-10V',
        pdf: '/PPF-Tech-HG940-PRO-FS3-Specifications_R3.0.pdf',
      },
      {
        model: 'HG660 PRO FS3',
        'Input(W)': '660',
        'PPF(umol/m2/s)': '1750',
        Spectrum: 'Full 4K',
        Bars: '8',
        Dimming: '0-10V',
        pdf: '/PPF-Tech-HG660-PRO-FS3-Specifications_R5.0.pdf',
      },
      {
        model: 'HG340 PRO FS1',
        'Input(W)': '340',
        'PPF(umol/m2/s)': '885',
        Spectrum: 'Full 4K',
        Bars: '6',
        Dimming: '0-10V',
        pdf: '/PPF-Tech-HG340-PRO-FS1-Specifications_R2.0.pdf',
      },
    ],
  }

  // className="  min-h-[400px] bg-gray-600 bg-blend-multiply "
  // style={{
  //   backgroundImage: `url("/PPF-Tech-HG660-Application-1200.jpg")`,
  // }}

  return (
    <div className=" space-y-8">
      <section
        className="container py-16  min-h-[400px] bg-gray-600 bg-blend-multiply bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/PPF-Tech-HG660-Application-1200.jpg")`,
        }}
      >
        <div className="grid grid-cols-2">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-4">
              <div className="relative w-[200px] h-[50px] ">
                <Image
                  src={headingImage}
                  sizes="200px"
                  fill
                  priority
                  style={{
                    objectFit: 'contain',
                  }}
                  alt="PPF Tech Logo Image"
                />
              </div>
              {/* <h1 className="text-3xl font-bold ">{quadz?.title}</h1> */}
              <p className="text-xl text-gray-100 ">{quadz?.subTitle}</p>
            </div>
            <ul className="text-gray-200 space-y-1">
              {quadz?.list?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center max-w-[500px] col-span-2 md:col-span-1">
            <Image className="w-full object-contain" src={heroImage} alt="PPF Tech Logo Image" sizes="100%" />
          </div>
        </div>
      </section>
      {/* <Separator className="" /> */}
      <section className="container py-16">
        <table className="w-full hidden md:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(quadz?.table[0])?.map(
                (item: any, i: number) =>
                  item !== 'pdf' && (
                    <th key={i} className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                      {item === 'PPF(umol/m2/s)' ? (
                        <span>
                          umol/m<sup>2</sup>/s
                        </span>
                      ) : (
                        <span>{item}</span>
                      )}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {quadz?.table?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="border border-gray-200 px-4 py-2">
                  <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                    {item.model}
                  </Link>
                </td>
                <td className="border border-gray-200 px-4 py-2">{item['Input(W)']}</td>
                <td className="border border-gray-200 px-4 py-2">{item['PPF(umol/m2/s)']}</td>
                <td className="border border-gray-200 px-4 py-2">{item['Spectrum']}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Bars}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Dimming}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:hidden">
          {quadz?.table?.map((item: any, i: number) => (
            <div className="p-4 border border-gray-200 flow-3xs" key={i}>
              <div className="">
                <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                  {item.model}
                </Link>
              </div>
              <div>
                <span className="font-[500]">Input</span>: {item['Input(W)']} W
              </div>
              <div>
                <span className="font-[500]">PPF</span>: {item['PPF(umol/m2/s)']} umol/m<sup>2</sup>/s
              </div>
              <div>
                {' '}
                <span className="font-[500]">Spectrum</span>: {item['Spectrum']}
              </div>
              <div>
                {' '}
                <span className="font-[500]">Bars</span>: {item.Bars}
              </div>
              <div>
                {' '}
                <span className="font-[500]">Dimming</span>: {item.Dimming}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Separator /> */}
      <section className="container grid grid-cols-12 gap-12 py-16 ">
        <div className="col-span-full lg:col-span-6">
          <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/pA3wF0ThOCI" />
        </div>
        <div className="col-span-full lg:col-span-6">
          <iframe className="w-full aspect-video" src=" https://www.youtube-nocookie.com/embed/jK0cvWp6SbU" />
        </div>
      </section>
    </div>
  )
}

export default Quadz

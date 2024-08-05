import Image from 'next/image'
import { Check, MoveRight } from 'lucide-react'
import Link from 'next/link'
import heroImage from '@/public/PPF-Tech-SL550-Side-View-Transparent-600.webp'
import headingImage from '@/public/Slimz-Name-Color.webp'

const SlimzPage = () => {
  const slimz = {
    title: 'SLIMZ',
    subTitle: 'Greenhouse or indoor grid',
    list: [
      'Maximized µmol per watt',
      'Tailored spectrum',
      'Power eco-link',
      'Control eco-link',
      'Slim design to minimize shadowing',
      'Deep light penetration',
      'Quick install',
      '5 year warranty',
    ],
    table: [
      {
        model: 'SL550 PRO FS1',
        'Input(W)': '550',
        'PPF(umol/m2/s)': '1550',
        Spectrum: 'Full 3.2K',
        Bars: '1',
        Dimming: '0-10V',
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF-Tech-SL550-Specifications_R8.0.pdf`,
      },
      {
        model: 'SL500 PRO RB1',
        'Input(W)': '500',
        'PPF(umol/m2/s)': '1600',
        Spectrum: 'BR Supplemental',
        Bars: '1',
        Dimming: '0-10V',
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF-Tech-SL500-Specifications_Rev2.0.pdf`,
      },
    ],
  }

  return (
    <div className=" space-y-8">
      <section
        className="container py-16  min-h-[400px] bg-gray-600 bg-blend-multiply bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/PPF-Tech-SL400-application-1000.jpg")`,
        }}
      >
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex  flex-wrap items-center gap-4">
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
              {/* <h1 className="text-3 font-bold text-neutral-99">{slimz?.title}</h1> */}
              <p className="text-xl text-gray-100">{slimz?.subTitle}</p>
            </div>
            <ul className="text-gray-200 space-y-1">
              {slimz?.list?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="f max-w-[500px]  col-span-2 md:col-span-1">
            <Image className="w-full object-contain" src={heroImage} alt="PPF Tech Logo Image" sizes="100%" />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <table className="w-full hidden lg:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(slimz?.table[0])?.map(
                (item: any, i: number) =>
                  item !== 'pdf' && (
                    <th className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100" key={i}>
                      {item}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {slimz?.table?.map((item: any, i: number) => (
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
        <div className="lg:hidden">
          {slimz?.table?.map((item: any, i: number) => (
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
    </div>
  )
}

export default SlimzPage

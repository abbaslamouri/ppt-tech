import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/public/CL24-PRO-FS3-PIC2.webp'
import headingImage from '@/public/Barz-Name-Color.png'

const BarzPage = () => {
  const propz = {
    title: 'PROPZ',
    subTitle: 'Propagation',
    list: [
      'Maximized µmol per watt',
      'Spectrally tailored fro specific plant response',
      'Power eco-link',
      'Even distribution',
      'Quick install',
      '5 year warranty',
    ],
    table: [
      {
        model: 'CL24 PRO FS5',
        'Input(W)/bar': '24',
        'PPF(umol/m2/s)/bar': '65',
        Spectrum: 'Clone 2.2K',
        Bars: '2',
        Dimming: '0-10V',
        pdf: '/PPF Tech CL24 PRO FS5 Specifications_R4.0.pdf',
      },
      {
        model: 'FR20 PRO FS7',
        'Input(W)/bar': '20',
        'PPF(umol/m2/s)/bar': '58',
        Spectrum: 'Far red',
        Bars: '2',
        Dimming: '0-10V',
        pdf: '/PPF Tech FR20 PRO FS7 Specifications_R1.0.pdf',
      },
    ],
  }

  return (
    <div className=" space-y-8">
      <section
        className="container py-16  min-h-[400px] bg-gray-600 bg-blend-multiply bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/PPF-Tech-Clone-backdrop-1500.jpg")`,
        }}
      >
        <div className="grid grid-cols-2 gap-8">
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
              <p className="text-3xl   text-gray-100">{propz?.subTitle}</p>
            </div>
            <ul className=" text-gray-200 space-y-1">
              {propz?.list?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center max-w-[500px] col-span-2 md:col-span-1">
            <Image className="w-full object-contain" src={heroImage} alt="PPF Tech Logo Image" sizes="100%" />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <table className="w-full hidden md:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(propz?.table[0])?.map(
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
            {propz?.table?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="border border-gray-200 px-4 py-2">
                  <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                    {item.model}
                  </Link>
                </td>
                <td className="border border-gray-200 px-4 py-2">{item['Input(W)/bar']}</td>
                <td className="border border-gray-200 px-4 py-2">{item['PPF(umol/m2/s)/bar']}</td>
                <td className="border border-gray-200 px-4 py-2">{item['Spectrum']}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Bars}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Dimming}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default BarzPage

import Image from 'next/image'
import Link from 'next/link'
import cd3Image from '@/public/PPF-Tech-CD3-Grouping-600.webp'
import cdx1Image from '@/public/PPF-Tech-CDX1-Grouping-600.webp'
import headingImage from '@/public/Controls-Name-Color.png'

const ControlsPage = () => {
  const controls = {
    title: 'CONTROLS',
    subTitle: 'Flexible control options',
    list: [
      'Economic CD-3 control for ON/OFF/DIM/SUNRISE/SUNSET scheduling',
      'Multi-feature CDX-1 control for additional sensing including CO2 and daylight harvesting',
      'Simple interface with Trolmaster and other common control brands',
    ],
    controlTableTitle: 'Controls',
    controlTable: [
      {
        model: 'CD-3',
        list: ['ON/OFF/DIM control device - manual interface', 'Controls up to 60 LED fixtures per channel'],
        pdf: 'PPF-Tech-CD-3-Specifications_R2.0.pdf',
      },
      {
        model: 'CDX-1',
        list: [
          'ON/OFF/DIM light control. CO2, temperature, humidity sensing',
          'Controls up to 60 LED fixtures per channel via RJ-M16 conversion cable',
        ],
        pdf: 'PPF-Tech-CDX-1-Specifications_R1.0.pdf',
      },
    ],
    accessoriesTableTitle: 'Accessories',
    accessoriesTable: [
      {
        model: 'PARS-1',
        list: ['Temperature sensor for CDX-1', 'Ongoing measurement of PPF'],
        pdf: 'PPF-Tech-PARS-1_Specifications_R1.0.pdf',
      },
      {
        model: 'CO2S-1',
        list: ['CO2 sensor for CDX-1', 'Ongoing measurement of carbon dioxide'],
        pdf: 'PPF-Tech-CO2S-1_Specifications_R1.0.pdf',
      },
      {
        model: 'TS-1',
        list: ['Temperature sensor for CD-3', 'Provides temperature sensing for a secondary zone'],
        pdf: 'PPF-Tech-TS-1-Specifications_R1.0.pdf',
      },
    ],
  }

  return (
    <div className="space-y-8">
      <section className="container py-16  min-h-[400px] bg-blend-multiply bg-no-repeat bg-cover">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative w-[300px] h-[50px] ">
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
            <p className="text-xl ">{controls?.subTitle}</p>
          </div>
          {/* </div> */}
          <ul className="space-y-1">
            {controls?.list?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center justify-evenly gap-16">
            <Image className="w-auto object-contain h-[16rem]" src={cd3Image} alt="PPF Tech Logo Image" sizes="100%" />
            <Image
              className="w-auto object-contain h-[17.5rem] -translate-y-3"
              src={cdx1Image}
              alt="PPF Tech Logo Image"
              sizes="100%"
            />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <table className="w-full hidden md:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              <th className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                {controls?.controlTableTitle}
              </th>
            </tr>
          </thead>
          <tbody>
            {controls?.controlTable?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="text-left flex flex-col gap-2 px-4 py-2">
                  <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                    {item.model}
                  </Link>
                  {item?.list?.map((el: any, j: number) => (
                    <span className="text-neutral-30" key={j}>
                      {el}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="container py-16">
        <table className="w-full hidden md:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              <th className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                {controls?.accessoriesTableTitle}
              </th>
            </tr>
          </thead>
          <tbody>
            {controls?.accessoriesTable?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="text-left flex flex-col gap-2 px-4 py-2">
                  <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                    {item.model}
                  </Link>
                  {item?.list?.map((el: any, j: number) => (
                    <span className="text-neutral-30" key={j}>
                      {el}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ControlsPage

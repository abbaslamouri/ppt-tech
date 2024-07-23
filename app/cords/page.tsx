import Image from 'next/image'
import Link from 'next/link'
import powerCordImage from '@/public/PPF-Tech-Power-Cord-grouping.webp'
import controlCordImage from '@/public/PPF-Tech-Control-Cord-Grouping-500.webp'
import headingImage from '@/public/Controls-Name-Color.png'

const CordsPage = () => {
  const cords = {
    title: 'CORDS',
    subTitle: 'Plug and play cord options',
    list: [
      'Power Eco-link for easy install',
      'Control Eco-link to multiple fixtures',
      'Eliminate power drops, control splitters',
      'Simplify 0-10V dimming',
    ],
    powerCordsTableTitle: 'Power cords',
    powerCordsTable: [
      {
        model: 'PC-14G-6-120',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Fixture to 120V outlet',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PC-14G-6-220',
        description: 'Power cord 6 ft (1.8m) with type I plug',
        application: 'Fixture to 220V outlet (South America)',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PC-14G-6-230',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Power cord 6 ft (1.8m) with type E plug',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PC-14G-6-240',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Power cord 6 ft (1.8m) with NEMA 6-15P 240V plug',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PC-14G-6-277',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Power cord 6 ft (1.8m) with NEMA L7-15P-277V plug',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PCF-14G-6',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Power cord 6 ft (1.8m) extension, fixture to fixture with M19 plugs',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PCF-14G-10 ft',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'Power cord 10 ft (3.0m) extension, fixture to fixture with M19 plugs',
        pdf: 'PPF-Tech-Power-Cord-Specifications_R2.0.pdf',
      },
      {
        model: 'PC-18G-6-240',
        description: 'Power cord 6 ft (1.8m) with NEMA 5-15P 120V plug',
        application: 'CL24 PRO FS5 power cord 6 ft (1.8m) with NEMA 6-15P 240V plug',
        pdf: '',
      },
    ],
    controlCordsTableTitle: 'Control Cords',
    controlCordsTable: [
      {
        model: 'CC-5-1',
        description: 'Control cord 5 ft (1.5m) extension, fixture to fixture with M16 plugs',
        application: 'Control extension between fixture rows or columns',
        pdf: 'PPF-Tech-Control-Cord-Specifications_R1.0.pdf',
      },
      {
        model: 'CC-10-1',
        description: 'Control cord 10 ft (3.0m) extension, fixture to fixture with M16 plugs',
        application: 'Control extension between fixture rows or columns',
        pdf: 'PPF-Tech-Control-Cord-Specifications_R1.0.pdf',
      },
      {
        model: 'CC-SP-6-1',
        description: 'Control cord splitter 6 ft (1.8m) with M16 plugs',
        application: 'Splits control signal for additional runs of 60 fixtures per split',
        pdf: 'PPF-Tech-Control-Cord-Specifications_R1.0.pdf',
      },
      {
        model: 'CC-22-6-1',
        description: 'Control cord 6 ft (1.8m) extension, fixture to fixture with M12 plugs',
        application: 'Control extension between CL24 PRO FS5 fixtures',
        pdf: '',
      },
      {
        model: 'RJ-M16',
        description: 'RJ to M16 conversion cable',
        application: 'Enables control devices with RJ output to interface with fixtures with M16 input',
        pdf: 'PPF-Tech-RJ-M16-Specifications_R4.0.pdf',
      },
    ],
  }

  return (
    <div className="space-y-8">
      <section className="container py-16  min-h-[400px] bg-blend-multiply bg-no-repeat bg-cover">
        <div className="space-y-6">
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
            <h2 className="text-xl  text-gray-800">{cords?.subTitle}</h2>
          </div>

          <ul className=" text-gray-700 space-y-1">
            {cords?.list?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center justify-evenly flex-wrap gap-16">
            <Image
              className="w-auto object-contain h-[16rem]"
              src={powerCordImage}
              alt="PPF Tech Logo Image"
              sizes="100%"
            />
            <Image
              className="w-auto object-contain h-[17.5rem] -translate-y-3 scale-[0.9]"
              src={controlCordImage}
              alt="PPF Tech Logo Image"
              sizes="100%"
            />
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="container pt-16 space-y-2">
        <h3 className="text-xl">{cords.powerCordsTableTitle}</h3>
        <table className="w-full hidden lg:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(cords?.powerCordsTable[0])?.map(
                (item: any, i: number) =>
                  item !== 'pdf' && (
                    <th key={i} className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                      <span>{item}</span>
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {cords?.powerCordsTable?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="text-left flex flex-col gap-2 px-4 py-2 min-w-48">
                  {item.pdf ? (
                    <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                      {item.model}
                    </Link>
                  ) : (
                    <span>{item.model}</span>
                  )}
                </td>
                <td>{item.description}</td>
                <td>{item.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {cords?.powerCordsTable?.map((item: any, i: number) => (
            <div className="p-4 border border-gray-200 space-y-2" key={i}>
              <div className="">
                <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                  {item.model}:
                </Link>
              </div>
              <div>
                <span className="font-[500]"></span>
                {item.description}
              </div>
              <div>
                <span className="font-[500]">Application</span>: {item.application}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pt-16 space-y-2">
        <h3 className="text-xl">{cords.controlCordsTableTitle}</h3>
        <table className="w-full hidden lg:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(cords?.controlCordsTable[0])?.map(
                (item: any, i: number) =>
                  item !== 'pdf' && (
                    <th key={i} className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                      <span>{item}</span>
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {cords?.controlCordsTable?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="text-left flex flex-col gap-2 px-4 py-2 min-w-36">
                  {item.pdf ? (
                    <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                      {item.model}
                    </Link>
                  ) : (
                    <span>{item.model}</span>
                  )}
                </td>
                <td>{item.description}</td>
                <td>{item.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {cords?.controlCordsTable?.map((item: any, i: number) => (
            <div className="p-4 border border-gray-200 space-y-2" key={i}>
              <div className="">
                <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                  {item.model}:
                </Link>
              </div>
              <div>
                <span className="font-[500]"></span>
                {item.description}
              </div>
              <div>
                <span className="font-[500]">Application</span>: {item.application}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CordsPage

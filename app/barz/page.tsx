import Image from "next/image"
import Link from "next/link"
import heroImage from "@/public/CL24-PRO-FS3-PIC2.webp"
import headingImage from "@/public/Barz-Name-Color.png"

const BarzPage = () => {
  const barz = {
    title: "BARZ",
    subTitle: "Propagation and Far Red",
    list: [
      "Maximized µmol per watt",
      "Spectrally tailored for specific plant response",
      "Power eco-link",
      "Even distribution",
      "Quick install",
      "5 year warranty",
    ],
    table: [
      {
        model: "CL24 PRO FS5",
        "Input(W)/bar": "24",
        "PPF(umol/m2/s)/bar": "65",
        Spectrum: "Clone 2.2K",
        Bars: "2",
        Dimming: "0-10V",
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF Tech CL24 PRO FS5 Specifications_R4.0.pdf`,
      },
      {
        model: "FR20 PRO FS7",
        "Input(W)/bar": "20",
        "PPF(umol/m2/s)/bar": "58",
        Spectrum: "Far red",
        Bars: "2",
        Dimming: "0-10V",
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF Tech FR20 PRO FS7 Specifications_R1.0.pdf`,
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
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative w-[200px] h-[50px] ">
                <Image
                  src={headingImage}
                  sizes="200px"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="PPF Tech Logo Image"
                />
              </div>
              <p className="text-3xl   text-gray-100">{barz?.subTitle}</p>
            </div>
            <ul className=" text-gray-200 space-y-1">
              {barz?.list?.map((item: string, i: number) => (
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
        <table className="w-full hidden lg:table border-collapse border shadow-md p-4 border-gray-200">
          <thead className="bg-primary-20 text-primary-90">
            <tr>
              {Object.keys(barz?.table[0])?.map(
                (item: any, i: number) =>
                  item !== "pdf" && (
                    <th className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100" key={i}>
                      {item === "PPF(umol/m2/s)/bar" ? (
                        <span>
                          umol/m<sup>2</sup>/s/bar
                        </span>
                      ) : (
                        <span>{item}</span>
                      )}
                      {/* {item} */}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {barz?.table?.map((item: any, i: number) => (
              <tr key={i}>
                <td className="border border-gray-200 px-4 py-2">
                  <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                    {item.model}
                  </Link>
                </td>
                <td className="border border-gray-200 px-4 py-2">{item["Input(W)/bar"]}</td>
                <td className="border border-gray-200 px-4 py-2">{item["PPF(umol/m2/s)/bar"]}</td>
                <td className="border border-gray-200 px-4 py-2">{item["Spectrum"]}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Bars}</td>
                <td className="border border-gray-200 px-4 py-2">{item.Dimming}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {barz?.table?.map((item: any, i: number) => (
            <div className="p-4 border border-gray-200 flow-3xs" key={i}>
              <div className="">
                <Link className="text-promary-40 font-bold underline" href={item.pdf} target="_blank">
                  {item.model}
                </Link>
              </div>
              <div>
                <span className="font-[500]">Input</span>: {item["Input(W)/bar"]} W
              </div>
              <div>
                <span className="font-[500]">PPF</span>: {item["PPF(umol/m2/s)/bar"]} umol/m<sup>2</sup>/s
              </div>
              <div>
                {" "}
                <span className="font-[500]">Spectrum</span>: {item["Spectrum"]}
              </div>
              <div>
                {" "}
                <span className="font-[500]">Bars</span>: {item.Bars}
              </div>
              <div>
                {" "}
                <span className="font-[500]">Dimming</span>: {item.Dimming}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BarzPage

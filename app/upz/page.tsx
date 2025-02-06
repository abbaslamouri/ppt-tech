import Image from "next/image"
import Link from "next/link"
import heroImage from "@/public/UC120 unfolded 2.png"
import headingImage from "@/public/UPZ-Name-Color.png"

const QuadzPage = () => {
  const quadz = {
    title: "UPZ",
    subTitle: "Under Canopy",
    list: [
      "Long power and control leads provide layout flexibility",
      "Folding legs included for 5” or 10” height selection",
      "Control link - daisy chain up to 80 fixtures per circuit",
      "Glass lens for long-lasting seal and transmittance ",
    ],
    table: [
      {
        model: "UC120 PRO FS6",
        "Input(W)": "120",
        "PPF(umol/m2/s)": "340",
        Spectrum: "Red/Far Red Weighted",
        Bars: "1",
        Dimming: "0-10V",
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF-Tech-UC120-PRO-FS6-Specifications_Rev3.0.pdf`,
      },
      {
        model: "UC145 PRO FS6",
        "Input(W)": "145",
        "PPF(umol/m2/s)": "410",
        Spectrum: "Red/Far Red Weighted",
        Bars: "1",
        Dimming: "0-10V",
        pdf: `${process.env.NEXT_PUBLIC_S3_BUCKET_HOSTNAME}/PPF-Tech-UC145-PRO-FS6-Specifications_R3.0.pdf`,
      },
    ],
  }

  return (
    <div className=" space-y-8">
      <section
        className="container py-16  min-h-[400px] bg-gray-600 bg-blend-multiply bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/Undercanopy long_250202.jpg")`,
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
              <p className="text-xl text-gray-100 ">{quadz?.subTitle}</p>
            </div>
            <ul className="text-gray-200 space-y-1">
              {quadz?.list?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center max-w-[500px] col-span-2 md:col-span-1  ">
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
                  item !== "pdf" && (
                    <th key={i} className="border border-gray-200 px-4 py-2 bg-gray-950 text-gray-100">
                      {item === "PPF(umol/m2/s)" ? (
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
                  <Link
                    className="text-promary-40 font-bold underline"
                    href={item.pdf}
                    // locale={false}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Downlod pdf"
                  >
                    {item.model}
                  </Link>
                </td>
                <td className="border border-gray-200 px-4 py-2">{item["Input(W)"]}</td>
                <td className="border border-gray-200 px-4 py-2">{item["PPF(umol/m2/s)"]}</td>
                <td className="border border-gray-200 px-4 py-2">{item["Spectrum"]}</td>
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
                <Link
                  className="text-promary-40 font-bold underline"
                  href={item.pdf}
                  // locale={false}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Downlod pdf"
                >
                  {item.model}
                </Link>
              </div>
              <div>
                <span className="font-[500]">Input</span>: {item["Input(W)"]} W
              </div>
              <div>
                <span className="font-[500]">PPF</span>: {item["PPF(umol/m2/s)"]} umol/m<sup>2</sup>/s
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

export default QuadzPage

import Image from 'next/image'
import servicesImage from '@/public/PPF-Tech-lighting-design-example-1000.jpg'

const Services = () => {
  const services = {
    title: 'Our services',
    description: 'PPF-Tech offers a compliment of professional services including',
    list: [
      'Complimentary lighting audits',
      'Complimentary lighting designs',
      'Lighting products tailored by application',
      'Lighting maintenance services',
    ],
  }

  return (
    <article id="services" className="py-16 ">
      <div className="container space-y-8 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
          <div className=" space-y-4 ">
            <div className="flow-3xs">
              <h2 className="text-3xl text-center">{services?.title}</h2>
              <p className="text-center">{services?.description}</p>
            </div>
            <div className="flex  flex-col items-center ">
              <ul className="text-muted-foreground text-sm ">
                {Object.values(services?.list)?.map((item: any, i: number) => (
                  <li className="flex gap-1" key={i}>
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=' relative w-3/4 h-auto aspect-square block md:flex md:w-1/2 "'>
            <Image
              style={{
                objectFit: 'contain',
              }}
              src={servicesImage}
              alt="PPF Tech Logo Image"
              sizes="500px"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Services

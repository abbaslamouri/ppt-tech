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
    <article className="py-16">
      <div className="container space-y-8 ">
        <div className="grid grid-cols-12 gap-12 items-center ">
          <div className="col-span-12 lg:col-span-8 space-y-4">
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
          <div className='col-span-12 lg:col-span-4 border-green"'>
            <Image className="w-full object-contain" src={servicesImage} alt="PPF Tech Logo Image" sizes="100%" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Services

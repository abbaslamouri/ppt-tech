import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Expertise = () => {
  const expertise = {
    title: 'Our expertise',
    description:
      "With a over sixty years of collective horticultural lighting experience, PPF Tech is gaining a strong global reputation. We strive to design, manufacture and distribute the world's best differentiated lighting and control systems, optimized for plant growth",
    cards: {
      card1: {
        title: 'Leading Technology',
        description:
          'We specialize in horticultural LED light control solutions that deliver the highest intensity (PPF per watt) while providing industry-leading color rendering and optimized spectral output from near UV to Far Red.',
        image: '/Leading-Technology.png',
      },
      card2: {
        title: 'Design Focus',
        description:
          'PPF Tech lighting systems are designed by expert, hands-on engineers. We focus on optimal performance, ease of installation and lowest total cost of ownership.',
        image: '/Design-Focus.png',
      },
      card3: {
        title: 'Application Based',
        description:
          'PPF Tech optimizes horticultural lighting applications by first defining key site attributes and specifications including building type/layout, plant DLI, spectral requirements and control demands.',
        image: '/Application-Based.png',
      },
    },
  }

  return (
    <article className="py-16">
      <div className="container space-y-8 ">
        <div className="space-y-4">
          <h2 className="text-3xl font-[600] text-center">{expertise?.title}</h2>
          <p className="text-center">
            <span className="inline-block max-w-[85ch] text-muted-foreground ">{expertise?.description}</span>
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {Object.values(expertise?.cards)?.map((card: any, i: number) => (
            <Card className="col-span-12 lg:col-span-4" key={i}>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center w-12 col-span-12 lg:col-span-4">
                      <Image
                        className="w-full object-contain "
                        src={card.image}
                        alt="PPF Tech Logo Image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <span>{card?.title}</span>
                  </div>
                </CardTitle>
                <CardDescription>{card?.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Expertise

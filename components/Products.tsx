import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import quadzImage from '@/public/PPF-Tech-QUADZ-HG660-Grouping-600.webp'
import barzImage from '@/public/BARZ-Grouping-image.png'
import slimzImage from '@/public/PPF-Tech-SLIMZ-SL550-Grouping-600.webp'

const Products = () => {
  const products = {
    title: 'Our products',
    description:
      'PPF Tech lighting systems are designed to provide optimal performance, lowest total cost of ownership and ease of use',
    list: [
      'Best-in-class efficiency µmol/m2/sec per Watt',
      'Proprietary spectrum',
      'Highest quality components',
      [
        'Osram, Samsung and proprietary chips',
        'Insulated, watertight electrical and control connections',
        'Anodized aluminum housings',
      ],
      'Universal designs that are compatible with numerous product platforms',
      'Fixture-to-fixture power and control linkage',
      'Control options and cross-compatibility with other control systems',
      'DesignLights Consortium (DLC) listings',
    ],
  }

  return (
    <article id="products" className="py-16">
      <div className="container space-y-8 ">
        <div className="space-y-4">
          <h2 className="text-3xl font-[600] text-center">{products?.title}</h2>
          <p className="text-center">{products?.description}</p>
        </div>
        <ul className="text-muted-foreground text-sm flex flex-col items-center">
          <div className="space-y-2">
            {Object.values(products?.list)?.map((item: any, i: number) =>
              Array.isArray(item) ? (
                item.map((el, j) => (
                  <li className="pi-2xs flex gap-1" key={j}>
                    &#9702; {el}
                  </li>
                ))
              ) : (
                <li className="flex gap-1" key={i}>
                  &bull; {item}
                </li>
              )
            )}
          </div>
        </ul>
        <div className="grid grid-cols-12 gap-8">
          <Link className="col-span-12 lg:col-span-4" href="/quadz">
            <Image className="h-32 w-full object-contain" src={quadzImage} alt="PPF Tech Logo Image" sizes="100%" />
          </Link>
          <Link className="col-span-12 lg:col-span-4" href="/barz">
            <Image className="h-32 w-full object-contain" src={barzImage} alt="PPF Tech Logo Image" sizes="100%" />
          </Link>
          <Link className="col-span-12 lg:col-span-4" href="/slimz">
            <Image className="h-32 w-full object-contain" src={slimzImage} alt="PPF Tech Logo Image" sizes="100%" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Products

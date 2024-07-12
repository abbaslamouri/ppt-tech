import Image from 'next/image'
// import { useTranslations, useMessages } from 'next-intl'
import { Check, Circle, Dot, MoveRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Products from '@/components/Products'
import Services from '@/components/Services'
// import Link from '../components/CustomeLink'
// import Hero from '../components/Hero'

export default function Home() {
  // const t = useTranslations('nav')
  // const messages: any = useMessages()

  return (
    <div className=" ">
      <Hero />
      <Expertise />
      <Separator className="" />
      <Products />
      <Separator className="" />

      <Services />
    </div>
  )
}

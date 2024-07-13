import { Separator } from '@/components/ui/separator'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Products from '@/components/Products'
import Services from '@/components/Services'

export default function Home() {
  return (
    <div>
      <Hero />
      <Expertise />
      <Separator />
      <Products />
      <Separator />
      <Services />
    </div>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(` min-h-screen ${inter.className}`)}>
        <AppHeader />
        <main className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}

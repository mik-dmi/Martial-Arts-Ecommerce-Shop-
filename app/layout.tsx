import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavBar } from '@/components'



export const metadata: Metadata = {
  title: 'Martial Arts Store',
  description: 'Best Martial Arts gear in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

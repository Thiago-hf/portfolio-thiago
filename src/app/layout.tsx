import '../styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Roboto as FontSans } from 'next/font/google'

const roboto = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Portifolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} bg-slate-200 font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

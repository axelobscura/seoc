import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supervisor Especializado en Obras de Concreto | Instituto Mexicano del Cemento y del Concreto A.C.',
  description: 'Supervisor Especializado en Obras de Concreto, Instituto Mexicano del Cemento y del Concreto A.C.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

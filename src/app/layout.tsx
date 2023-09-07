import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
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
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;500;1000&display=swap" rel="stylesheet"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

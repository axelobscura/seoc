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
      <body className={inter.className}>
        {children}
        <div className='flex items-center flex-col login bg-gray-950 bg-opacity-90 py-5 px-0'>
          <p className='font-smooch text-gray-50'>®2025, Instituto Mexicano del Cemento y del Concreto A.C., Todos Los Derechos Reservados.</p>
        </div>
      </body>
    </html>
  )
}

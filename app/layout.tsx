import './globals.css'
import Header from './components/header/Header'
// import { AnimatePresence, motion } from 'framer-motion'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HOSTSHARE',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
        <body className={`${inter.className} mb-[20vh]`}>
          {/* <Header /> */}
          {children}
        </body>
    </html>
  )
}

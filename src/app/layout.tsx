import './globals.css'
import { Noto_Sans_Display } from 'next/font/google'

const noto = Noto_Sans_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Matt Willis',
  description: 'Matt Willis @ mrwillis.net',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}

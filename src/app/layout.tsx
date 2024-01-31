import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const AuthContext = dynamic(() => import('../../components/Context/AuthContext'), { ssr: false })

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ইকরা প্রতিদিন',
  description: 'সত্য প্রকাশে আপোষহীন, দৈনিক ইকরা প্রতিদিন',
  twitter: {
    title: "ইকরা প্রতিদিন",
    description: 'সত্য প্রকাশে আপোষহীন, দৈনিক ইকরা প্রতিদিন',
    card: "summary_large_image",
    images: ["https://i.ibb.co/6s8Dc1N/300375281-501355718661040-8852605997729506088-n-1.jpg"]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      {/* <!-- Google Font Concert One --> */}
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Concert+One&family=Oswald:wght@500&family=PT+Sans&family=Sora:wght@100;400&family=Teko:wght@500&display=swap"
        rel="stylesheet"
      />
    <Link rel="preconnect" href="https://fonts.googleapis.com"/>
<Link rel="preconnect" href="https://fonts.gstatic.com" />
<Link href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet"/>
      {/* <!-- Animate  --> */}
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      {/* <!-- Google Font --> */}
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Google Font --> */}
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />

      <Link
        href="https://fonts.googleapis.com/css2?family=Anek+Bangla&family=Galada&family=Mina:wght@400;700&display=swap"
        rel="stylesheet" />
      <meta property="fb:app_id" content="1108797420295398" />

      <body
      // className={inter.className}
      >
        <AuthContext>
          {children}
        </AuthContext>
        <Script src='https://kit.fontawesome.com/f499b60f30.js' crossOrigin='anonymous'></Script>
      </body>
    </html>
  )
}

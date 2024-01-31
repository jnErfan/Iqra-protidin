import { Fragment } from "react"
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../../../components/Pages/Shared/Navbar/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../../../components/Pages/Shared/Footer/Footer'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
  )
}

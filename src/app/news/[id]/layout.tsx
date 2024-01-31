import { Fragment } from "react"
import Footer from "../../../../components/Pages/Shared/Footer/Footer"
import Navbar from "../../../../components/Pages/Shared/Navbar/Navbar"

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

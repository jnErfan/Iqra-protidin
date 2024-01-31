import { Fragment } from 'react'
import Home from '../../components/Pages/Home/Home'
import Footer from '../../components/Pages/Shared/Footer/Footer'
import Navbar from '../../components/Pages/Shared/Navbar/Navbar'

export default function Home_() {
  return <Fragment>
    <Navbar />
    <Home />
    <Footer />
  </Fragment>
}

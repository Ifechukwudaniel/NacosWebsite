import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'



export default function GalleryPage() {
  return (
    <div>
    <PageHeader pageTitle={"Gallery"}/>
    <div>
    <div className="gallary">
      <div className="gallarylist">
        <motion.img animate={{y:[0,20], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
        <motion.img animate={{y:[0,0], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
        <motion.img animate={{y:[0,70], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
    </div>
    <div className="gallarylist">
        <motion.img animate={{y:[0,40], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
        <motion.img animate={{y:[0,50], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
        <motion.img animate={{y:[0,50], opacity:[0,1]}} src="images/Frame-69.png" loading="lazy" alt="" className="gallaryimage"/>
    </div>
    </div>
  </div>
    <Footer/>
  </div>   
  )
}

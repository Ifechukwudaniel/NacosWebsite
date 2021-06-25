import GalleryItem from '@components/Gallary/GalleryItem'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'



export default function GalleryPage() {
  return (
    <div>
    <PageHeader pageTitle={"Gallery"}/>
      <div>
        <div className="gallary">
            <div className="gallarylist">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
            <div className="gallarylist">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
            <div className="gallarylist">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
            <div className="gallarylist">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
            <div className="gallarylist">
                <GalleryItem/>
                <GalleryItem/>
                <GalleryItem/>
            </div>
        </div>
    </div>
    <Footer/>
  </div>   
  )
}

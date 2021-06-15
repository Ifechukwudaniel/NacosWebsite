import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'


export default function BlogsPage() {

  return (
    <div>
      <PageHeader pageTitle={"Blogs"}/>
      <Footer/>
    </div>   
  )
}

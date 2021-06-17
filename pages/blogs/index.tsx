import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import BlogItem from '../../components/Blogs/BlogItem'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'


export default function BlogsPage() {
  return (
    <div>
      <PageHeader pageTitle={"Blogs"}/>
      <div className="blogpagelistwrapper">
        <div className="bloglist">
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
        </div>
      </div>
      <div className="paginationblog">
      </div>
      <Footer/>
  </div>
  )
}

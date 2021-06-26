import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import BlogItem from '@components/Blogs/BlogItem'
import Footer from '@components/Footer'
import PageHeader from '@components/PageHeader'
import { IBlog } from '@models/Blogs'
import axios from 'axios'


export default function BlogsPage(props:{blogs:IBlog[]}) {
  return (
    <div>
      <PageHeader pageTitle={"Blogs"}/>
      <div className="blogpagelistwrapper">
        <div className="bloglist">
          {
            props.blogs.map((x,i)=>(
              <BlogItem slug={x.slug} image={x.blogImage} date={x.date} title={x.title} />
            ))
          }
        </div>
      </div>
      <div className="paginationblog">
      </div>
      <Footer/>
  </div>
  )
}

export async function getServerSideProps() {
  const blogs: IBlog[] = await (await axios.get(`${process.env.URL}/api/blog`)).data
  return {
      props: {blogs},
  };
}

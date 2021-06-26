import BlogItem from '@components/Blogs/BlogItem'
import Footer from '@components/Footer'
import CustomHeader from '@components/Header/CustomHeader'
import Head from 'next/head'
import Image from 'next/image'
import { IBlog } from '@models/Blogs'
import axios from 'axios'
import moment from 'moment'
// import styles from '../styles/Home.module.css'

export default function BlogItemPage(props: {currentBlog: IBlog, otherBlogs:IBlog[]}) {
  console.log(props.currentBlog.blogImage)
  return (
  <div>
    <CustomHeader/>
    <div style={{alignSelf:'center', margin:"auto"}} className="titlewrapper">
      <h1 style={{margin:"auto"}}  className="blogpagetitle">{props.currentBlog.title}</h1>
      <div style={{margin:"auto", width:"100%"}} className="blogpagedata">{moment(props.currentBlog.date).format('DD MMMM YYYY')}</div>
    </div>
    <div className="blogimagewrapper"><img src={`${props.currentBlog.blogImage}`} loading="lazy" width="100" alt="" className="blogpageimage"/></div>
    <div className="blogcontentwrapper">
      <div className="blogcontentdiv" style={{color:"#fff"}} dangerouslySetInnerHTML={{__html:props.currentBlog.content}}/>
          
        {/* <div className="blogexampletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . <br/><br/>Creating Futures isnt that easy<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt .</div>
      </div> */}
    </div>
    <div className="otherblogwrapper">
      <h1 className="youmaylike">You May Also Like</h1>
        <div style={{marginTop:"3%"}} className="bloglist">
          {
            props.otherBlogs.map((x, i)=>(
              <BlogItem {...x} image={x.blogImage} date ={x.date}  />
            ))
          }
        </div>
    </div>
  <Footer/>
  </div>  )
}


export async function getServerSideProps(context) {
  const blogs: IBlog[] = await (await axios.get(`${process.env.URL}/api/blog`)).data
  let currentBlog  :IBlog=  blogs.filter((x)=> x.slug === context.query.slug  )[0]
  let otherBlogs:IBlog[] =  blogs.filter((x)=> x.slug !== context.query.slug )

  return {
      props: {currentBlog, otherBlogs},
  };
}
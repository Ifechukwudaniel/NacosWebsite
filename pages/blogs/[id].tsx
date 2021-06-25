import BlogItem from '@components/Blogs/BlogItem'
import Footer from '@components/Footer'
import CustomHeader from '@components/Header/CustomHeader'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function BlogItemPage() {
  return (
  <div>
    <CustomHeader/>
    <div style={{alignSelf:'center', margin:"auto"}} className="titlewrapper">
      <h1 style={{margin:"auto"}}  className="blogpagetitle">Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar</h1>
      <div style={{margin:"auto", width:"100%"}} className="blogpagedata">10th March, 2020</div>
    </div>
    <div className="blogimagewrapper"><img src="/images/blogImage.png" loading="lazy" width="100" alt="" className="blogpageimage"/></div>
    <div className="blogcontentwrapper">
      <div className="blogcontentdiv">
        <div className="blogexampletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . <br/><br/>Creating Futures isnt that easy<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt .</div>
      </div>
    </div>
    <div className="otherblogwrapper">
      <h1 className="youmaylike">You May Also Like</h1>
        <div style={{marginTop:"3%"}} className="bloglist">
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
          <BlogItem image="images/blogImage.png" date="17th June 2021" title="Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar" />
        </div>
    </div>
  <Footer/>
  </div>
  )
}

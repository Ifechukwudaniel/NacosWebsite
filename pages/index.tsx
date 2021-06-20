import Head from 'next/head'
import Image from 'next/image'
import BlogList from '../components/Blogs/BlogHomeList'
import EventItemHome from '../components/Event/EventItemHome'
import Footer from '../components/Footer/index';
import Header from '../components/Header/index'
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import {isMobile} from 'react-device-detect';
import  {Fragment} from 'react';

// import styles from '../styles/Home.module.css'

export default function IndexPage() {

  const {  scrollYProgress } = useViewportScroll();
  const quoteScrollAnimationDesktop = useTransform(scrollYProgress, [0, 0.4], [0, 400]);
  const quoteScrollAnimationMobile = useTransform(scrollYProgress, [0, 0.5], [-200, 400]);
  const homeFadeScrollAnimation = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const eventListAnimation = useTransform(scrollYProgress, [0.53, 0.80], [200,0]);
  const quoteMove  = { hidden : {  opacity :0,x: "100vw"},showQuote : { opacity:1, x:"0vw"}}
  const homeFadeDiv  = { hidden : {  opacity :0,y: "100vw"},showDiv : { opacity:1, y:"0vw"}}



  return (
    <Fragment>
        <motion.div className="home">
            <Header/>
              <div className="backgroundwrapper">
              <div data-w-id="3ea6a6cf-e8a6-0f46-3351-77b676706e68" className="imageleft">
                <div className="homeilustration">
                    <img src="images/School.png" loading="lazy" width="384" style={{opacity:1}} data-w-id="87468ef7-e340-9f8d-b9c7-46dc2dfcae44" alt="" className="homeilustration img"/>
                  </div>
                <motion.div style={{ opacity:homeFadeScrollAnimation }} animate="showDiv" transition={{ ease: "easeOut", duration: 0.5 }} variants={homeFadeDiv} initial="hidden" className="welcome">
                  <div className="subwelcome"><img src="images/GraduationCap.png" loading="lazy" alt="" className="cap greduation"/>
                    <h1 className="welcometext">Welcome to</h1>
                    <h1 className="welcometext nacos">NACOS</h1>
                  </div>
                  <div className="subwelcome">
                    <h1 className="welcometext">B.I.U Chapter</h1>
                  </div>
                  <div className="subwelcome">
                    <div className="welcometextdescription">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt</div>
                  </div>
                  <div className="callaction">
                    <a data-w-id="89181162-243f-8487-f13e-29f945726900" href="#" className="buttonexploere w-inline-block">
                      <div className="buttontext">explore<br/>‍</div>
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="imageright">
                <motion.div style={{ y: isMobile ? quoteScrollAnimationMobile :  quoteScrollAnimationDesktop  }}  animate="showQuote" transition={{ ease: "easeOut", duration: 0.5 }} variants={quoteMove} initial="hidden" className="quotewrapper">
                  <h3 className="heading">“The fly that does not listen, will<br/>surely follow the corpse to the grave”.</h3>
                  <div className="quoteby">LECTURE QUOTE  OF THE WEEK</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="blog">
            <div className="blogheader">
              <div className="newsheader">
                <h1 className="latest">Latest  </h1>
                <h1 className="news">News</h1>
              </div>
            </div>
            <div className="blogwrapper">
              <BlogList/>
            </div>
            </div>
            <div className="events">
            <div className="eventwrapper">
              <div className="eventlist null"></div>
              <motion.div style={{ y: eventListAnimation}}  className="eventlist">
                <div className="eventlistwrapper">
                  <h1 className="eventtitle">Upcoming Events</h1>
                  <br/>
                  <EventItemHome date={1} month={"Feb"} title="020 vs 022 Novelty match" />
                  <EventItemHome date={19} month={"Jun"} title="020 vs 022 Novelty match"/>
                  <EventItemHome date={1} month={"Jun"} title="020 vs 022 Novelty match"/>
                  <EventItemHome date={1} month={"Jun"} title="020 vs 022 Novelty match"/>
                  <a href="/event" className="eventseemore">See More</a>
                </div>
              </motion.div>
            </div>
          </div>
        <Footer/>
    </Fragment>
  )
}

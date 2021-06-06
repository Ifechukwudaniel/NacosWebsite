import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <div className="home">
            <Header/>
              <div className="backgroundwrapper">
              <div data-w-id="3ea6a6cf-e8a6-0f46-3351-77b676706e68" className="imageleft">
                <div className="homeilustration"><img src="images/School.png" loading="lazy" width="384" style={{opacity:1}} data-w-id="87468ef7-e340-9f8d-b9c7-46dc2dfcae44" alt="" className="homeilustration img"/></div>
                <div data-w-id="bab2cb34-0511-9909-a78c-c381cba61dcc"  className="welcome">
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
                </div>
              </div>
              <div className="imageright">
                <div data-w-id="b367b84b-a831-a919-11c9-2fc68379094c" className="quotewrapper">
                  <h3 className="heading">“The fly that does not listen, will<br/>surely follow the corpse to the grave”.</h3>
                  <div className="quoteby">LECTURE QUOTE  OF THE WEEK</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="blogheader">
              <div className="newsheader">
                <h1 className="latest">Latest  </h1>
                <h1 className="news">News</h1>
              </div>
            </div>
            <div className="blogwrapper">
              <div data-w-id="cdcfd309-e48b-a6e7-b265-556ba07f164c" className="blogitem _1"><img src="images/blogImage.png" loading="lazy" width="345" alt="" className="blogimage"/>
                <div className="blogcontent">
                  <h1 className="blogtitle">Application for Advertised Course/ Staff form Request</h1>
                  <div className="text-block-2">17th June 2021</div>
                  <div className="blogdescription">This is some text inside of a dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt .iv block.</div>
                </div>
              </div>
              <div data-w-id="cdcfd309-e48b-a6e7-b265-556ba07f164c" className="blogitem _1"><img src="images/blogImage.png" loading="lazy" width="345" alt="" className="blogimage"/>
                <div className="blogcontent">
                  <h1 className="blogtitle">Application for Advertised Course/ Staff form Request</h1>
                  <div className="text-block-2">17th June 2021</div>
                  <div className="blogdescription">This is some text inside of a dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt .iv block.</div>
                </div>
              </div>
              <div data-w-id="cdcfd309-e48b-a6e7-b265-556ba07f164c" className="blogitem _1"><img src="images/blogImage.png" loading="lazy" width="345" alt="" className="blogimage"/>
                <div className="blogcontent">
                  <h1 className="blogtitle">Application for Advertised Course/ Staff form Request</h1>
                  <div className="text-block-2">17th June 2021</div>
                  <div className="blogdescription">This is some text inside of a dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt .iv block.</div>
                </div>
              </div>
            </div>
            </div>
            <div className="events">
            <div className="eventwrapper">
              <div className="eventlist null"></div>
              <div className="eventlist">
                <div className="eventlistwrapper">
                  <h1 className="eventtitle">Upcoming Events</h1>
                  <div className="eventitem">
                    <div className="eventdate">
                      <h4 className="dateinmonth">1</h4>
                      <h4 className="dateinmonth dateday">March</h4>
                    </div>
                    <h3 className="eventdescription">NACOS Dinner</h3>
                  </div>
                  <div className="eventitem">
                    <div className="eventdate">
                      <h4 className="dateinmonth">1</h4>
                      <h4 className="dateinmonth dateday">March</h4>
                    </div>
                    <h3 className="eventdescription">020 vs 022 Novelty match</h3>
                  </div>
                  <div className="eventitem">
                    <div className="eventdate">
                      <h4 className="dateinmonth">1</h4>
                      <h4 className="dateinmonth dateday">March</h4>
                    </div>
                    <h3 className="eventdescription">020 vs 022 Novelty match</h3>
                  </div>
                  <div className="eventitem">
                    <div className="eventdate">
                      <h4 className="dateinmonth">1</h4>
                      <h4 className="dateinmonth dateday">March</h4>
                    </div>
                    <h3 className="eventdescription">020 vs 022 Novelty match</h3>
                  </div>
                  <div className="eventitem">
                    <div className="eventdate">
                      <h4 className="dateinmonth">1</h4>
                      <h4 className="dateinmonth dateday">March</h4>
                    </div>
                    <h3 className="eventdescription">020 vs 022 Novelty match</h3>
                  </div>
                  <a href="#" className="eventseemore">See More</a>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
    </div>
  )
}

import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import EventItem from '../../components/Event/EventItem'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'


// import styles from '../styles/Home.module.css'

export default function EventsPage() {
  return (
    <div>
        <PageHeader pageTitle={"Events"}/>
          <div className="eventpagewrapper">
            <div className="eventlist eventpage">
              <div className="eventlistwrapper eventpage">
                <h1 className="eventtitle">Upcoming Events</h1>
                <EventItem date={1} month={"Jan"} title="NAcos Dinner" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum do"}/>
                <EventItem date={1} month={"Jan"} title="NAcos Dinner" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum do"}/>
                <EventItem date={1} month={"Jan"} title="NAcos Dinner" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt . Lorem ipsum do"}/>
              </div>
              </div>
            </div>
          <Footer/>
      </div>
  )
}

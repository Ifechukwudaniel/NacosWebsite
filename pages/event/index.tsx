import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import EventItem from '@components/Event/EventItem'
import Footer from '@components/Footer'
import PageHeader from '@components/PageHeader'
import { IEvent } from '@models/Events'
import  axios from "axios"

export default function EventsPage(props: {
  events:IEvent[]
}) {
  return (
    <div>
        <PageHeader pageTitle={"Events"}/>
          <div className="eventpagewrapper">
            <div className="eventlist eventpage">
              <div className="eventlistwrapper eventpage">
                <h1 className="eventtitle">Upcoming Events</h1>
                {
                  props.events.map((x)=>(
                      <EventItem  {...x}/>
                  ))
                }
              </div>
              </div>
            </div>
          <Footer/>
      </div>
  )
}

export async function getServerSideProps() {
  const events: IEvent[] = await (await axios.get(`${process.env.URL}/api/event`)).data
  return {
      props: {events},
  };
}
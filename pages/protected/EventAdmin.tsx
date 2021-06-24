import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import LoadingOverlay from '@components/LoadingOverlay'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import { Fragment } from 'react'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import ModalOverlay from '@components/ModalOverlay'
import AdminEventItem from '@components/protected/AdminEvent/AdminEventItem'
import { IEvent } from '@models/Events'
import  axios from "axios"
import {NotificationManager} from 'react-notifications';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdminEventForm from '@components/protected/AdminEvent/AdminEventForm'

export default function EventAdminPage(props: {
    events:IEvent[]
}) {

    const [pageEvents, setPageEvent] = useState<IEvent[]>(props.events)
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    
    const handleCreateEvent = ()=>{
        setOpen(!open)
    }
    const handleDelete = async (id)=>{
        try {
            setLoadingText("Deleting Event")
            setLoading(true)
            await axios.post(`${window.location.host}/api/event/delete`,{id})
            return setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            // return NotificationManager.error(error.response.statusText);
        }
    }

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <LoadingOverlay active={loading} text={loadingText}/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Create New Event">
                <AdminEventForm handleClose={handleCreateEvent} />
            </ModalOverlay>
            <div className="admincontentwrapper">
                <div className="emptylistnon">
                    <img src="images/images.png" loading="lazy" alt="" className="calenderimage"/>
                    <div className="nulldatatext">Upload your images to<br/>the gallery<br/></div>
                        <a href="#" className="createitembutton w-button">Upload Images</a>
                </div>
                <div className="gallarycontent blogs">
                    <div className="addimagewrapper-2">
                        <div className="titlewrapper">
                        <h1 className="titlepage">Current Events</h1>
                        </div>
                        <motion.a onClick={(e)=>{e.preventDefault(), setOpen(!open)}} whileTap={{scale:1.2}}   className="createitembutton addimagebutton w-button">Create New Event<br/></motion.a>
                    </div>
                    <div className="blogadminwrapper">
                        {
                            pageEvents.map((x, i)=>(
                                <AdminEventItem key={i} onClickDelete={handleDelete} {...x}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>     
    )
}

export async function getStaticProps() {
    const events: IEvent[] = await (await axios.get(`${process.env.URL}/api/event`)).data
    return {
        props: {events},
    };
}
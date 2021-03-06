
import { motion } from 'framer-motion'
import { useState } from 'react'
import LoadingOverlay from '@components/LoadingOverlay'
import  Router ,{ useRouter } from 'next/router'
import CustomHeader from '@components/Header/CustomHeader'
import ProtectedTab from '@components/protected/ProtectedTab'
import ModalOverlay from '@components/ModalOverlay'
import AdminEventItem from '@components/protected/AdminEvent/AdminEventItem'
import { IEvent } from '@models/Events'
import  axios from "axios"
import {NotificationManager} from 'react-notifications';
import "react-datepicker/dist/react-datepicker.css";
import AdminEventForm from '@components/protected/AdminEvent/AdminEventForm'
import addDays from '@utils/addDays'
import variables from '@utils/variables'

export default function EventAdminPage(props: {
    events:IEvent[]
}) {

    const [pageEvents, setPageEvent] = useState<IEvent[]>(props.events)
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    
    
    const handleCreateEvent =  async (data)=>{
        try {
            setLoadingText("Creating Event")
            setLoading(true)
            console.log(data)
            await axios.post(`${variables.url}/api/event/createEvent`,{
                title:data.title, 
                description:data.description,
                date:data.date
            })
            setPageEvent([...pageEvents, data])
            NotificationManager.success("Created Event");
            return setOpen(!open)
        } catch (error) {
            // console.log(error)
            setLoading(false)
            // return NotificationManager.error("Please an error occurred");
        }
    }


    const handleDelete = async (id)=>{
        try {
            setLoadingText("Deleting Event"), setLoading(true)
            await axios.post(`${variables.url}/api/event/delete`,{id})
            setPageEvent(pageEvents.filter(x=>x._id!==id))
            return setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            return NotificationManager.error(error.response.statusText);
        }
    }

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <LoadingOverlay active={loading} text={loadingText}/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Create New Event">
                <AdminEventForm onSubmit={handleCreateEvent} handleClose={handleCreateEvent} />
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

export async function getServerSideProps() {
    const events: IEvent[] = await (await axios.get(`${process.env.URL}/api/event`)).data
    return {
        props: {events},
    };
}
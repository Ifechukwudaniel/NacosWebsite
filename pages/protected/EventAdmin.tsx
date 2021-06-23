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

export default function EventAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Create New Event"/>
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
                        <AdminEventItem/>
                    </div>
                </div>
            </div>
        </div>     
    )
}

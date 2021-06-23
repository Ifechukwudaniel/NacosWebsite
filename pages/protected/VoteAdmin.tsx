import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@components/Header'
import ProtectedTab from '@components/protected/ProtectedTab'
import CustomHeader from '@components/Header/CustomHeader'
import ModalOverlay from '@components/ModalOverlay'
import AdminVoteItem from '@components/protected/AdminVote/AdminVoteItem'

export default function VoteAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const router = useRouter()

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <ModalOverlay onClose = {()=>setOpen(!open)} active={open} title="Create New Poll"/>
            <div className="admincontentwrapper">
                <div className="emptylistnon">
                    <img src="images/images.png" loading="lazy" alt="" className="calenderimage"/>
                    <div className="nulldatatext">Upload your images to<br/>the gallery<br/></div>
                    <a href="#" className="createitembutton w-button">Upload Images</a>
                </div>
            <div className="gallarycontent blogs">
                <div className="addimagewrapper-2">
                    <div className="titlewrapper">
                        <h1 className="titlepage">Ongoing Election</h1>
                    </div>
                    <motion.a onClick={(e)=>{e.preventDefault(), setOpen(!open)}} whileHover={{opacity:0.8}} whileTap={{scale:1.1}}  className="createitembutton addimagebutton w-button">Create New Poll<br/>‍<br/></motion.a>
                </div>
                <div className="blogadminwrapper">
                    <AdminVoteItem/>
                </div>
            </div>
            </div>
        </div> 
    )
}

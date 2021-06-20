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

export default function EventPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    

    return (
        <Fragment>
            <CustomHeader/>
            <div>
                <div className="adminheadermenu">
                    <div className="adminheader">
                    <a href="/protected/EventAdmin" className="adminhederitem  active w--current">Events</a>
                    <a href="/protected/BlogAdmin" className="adminhederitem">Blogs</a>
                    <a href="/protected/VoteAdmin" className="adminhederitem">Voting</a>
                    <a href="/protected/DuesAdmin" className="adminhederitem">Dues</a>
                    <a href="/protected/AdminGallary" aria-current="page" className="adminhederitem">Gallery</a>
                    </div>
                </div>
            </div>
        </Fragment>     
    )
}

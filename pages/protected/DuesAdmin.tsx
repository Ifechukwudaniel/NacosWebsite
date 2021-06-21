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
import DuesAccordion from '@components/protected/DuesAdmin/DuesAccordion'


export default function DuesAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
            <div className="duescontent">
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="serchduesform">
                        <input type="text" className="searchrecods w-input"  name="records" data-name="records" placeholder="Search records" id="records"/>
                        <motion.div   whileTap={{scale:0.9}} className="searchrecods icon"><img src="/images/search.png" loading="lazy" width="16" alt="" className="searchiocn"/></motion.div>
                    </form>
                </div>
            </div>
            <div className="admincontentwrapper">
                <div className="emptylistnon">
                    <img src="/images/dues.png" loading="lazy" alt="" className="adminimage"/>
                        <div className="nulldatatext">
                            See Dues paid by students here<br/>
                        </div>
                </div>
                <DuesAccordion open/>
                <DuesAccordion/>
            </div>
            
        </div>    
    )
}

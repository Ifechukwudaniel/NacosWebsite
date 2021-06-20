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
import Header from '@components/Header'

export default function ProtectedPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {error}  = router.query
    
    const handlePasswordChange :React.ChangeEventHandler<HTMLInputElement> = (event)=>{
        return  setPassword(event.target.value);

    }

    const handleSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        if(password==="1111") return router.push('/protected/EventAdmin')
        return router.push(
            {
            pathname:'/protected',
            query :{
                error:"The password you entered is wrong "
            }
        })
    }

    return (
        <Fragment>
        <Header/>
        <div className="utility-page-wrap">
            <div className="utility-page-content w-password-page w-form">
                <form  onSubmit={handleSubmit} className="utility-page-form w-password-page">
                    <div className="centerform"><img src="images/lock.png" loading="lazy" width="135" alt="" className="protectimage"/>
                    <h1 className="protectwelcometitle">Welcome to NACOSS Admin</h1>
                    {
                        error &&(
                            <div className="w-password-page w-form-fail">
                                <div>{error}</div>
                            </div>
                        )
                    }
                    <br/>
                        <input value={password} onChange={handlePasswordChange} type="password"  placeholder="Enter your password" className="passwordfield w-password-page w-input"/>
                        <motion.input  whileHover={{scale:1.1}} whileTap= {{scale:0.9}} type="submit" value="Login" data-wait="Please wait..." className="protectpagebutton w-password-page w-button"/>
                    </div>
                </form>
            </div>
        </div>  
    </Fragment>     
    )
}

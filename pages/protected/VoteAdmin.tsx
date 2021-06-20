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

export default function VoteAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    const handlePasswordChange :React.ChangeEventHandler<HTMLInputElement> = (event)=>{
        return  setPassword(event.target.value);
    }

    const handleSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        if(password!==process.env.PRIVATEPASSWORD){
            router.push('/')
        }
        router.push('/')
    }

    return (
        <Fragment>
            <Header/>  
        </Fragment>     
    )
}

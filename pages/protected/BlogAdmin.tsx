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

export default function BlogAdminPage() {
    const [ password , setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <div>
            <CustomHeader/>
            <ProtectedTab/>
        </div>    
    )
}

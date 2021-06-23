import React, { Fragment } from 'react';
import HeaderLink from './HeaderLink';
import {  signOut, useSession } from 'next-auth/client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'


const HeaderLinksList = () => {
    const [ session, loading ] = useSession()
    const router = useRouter()
    if(session) {
    return (
            <Fragment>
                <HeaderLink href="/profile" text="Profile" />
                <HeaderLink href="/payDues" text="Pay Dues" />
                <HeaderLink href="/store" text="Store" />
                <HeaderLink href="/election" text="Election"/>
                <HeaderLink href="/event" text="Events" />
                <HeaderLink href="/blogs" text="Blogs" />
                <HeaderLink href="/gallery" text="Gallery" />
                <HeaderLink href="/protected" text="Admin" />
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} onClick ={()=>{
                    signOut().then(()=>{
                        router.push('/')
                    })
                }}  className="menulink">Logout </motion.a>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <HeaderLink href="/" text="Home" />
            <HeaderLink href="/material" text="Material" />
            <HeaderLink prevent href="/profile" text="Profile" />
            <HeaderLink prevent href="/payDues" text="Pay Dues" />
            <HeaderLink href="/store" text="Store" />
            <HeaderLink href="/event" text="Events" />
            <HeaderLink href="/blogs" text="Blogs" />
            <HeaderLink href="/gallery" text="Gallery" />
            <HeaderLink href="/login" text="Login" />
        </Fragment>
    );
}

export default HeaderLinksList;

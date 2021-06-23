import { motion } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/router'



const HeaderLink = (props: { href : string , text:string, prevent ? : boolean}) => {
    const router = useRouter()

    const handleClick = (e:any)=>{
      if(props.prevent ){
        router.push('/login')
        return e.preventDefault();
      }
    }
    return (
        <motion.a  onClick={(e)=>{handleClick(e)}}   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href={props.href} className="menulink"> {props.text}  </motion.a>
    )
}
export default HeaderLink;

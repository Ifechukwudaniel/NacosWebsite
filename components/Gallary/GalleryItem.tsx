import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';



const GalleryItem = (props:{title?:string}) => {
    const [open, setOpen] = useState(false)
    const imageOverlayVariants = {
        open:{
            height:"100%",
            transition: {
                duration:0.7
            }
        },
        close:{
            height:"0%",
            transition: {
                duration:0.5
            }
        }
    }
    const handleHover = ()=>{
        setOpen(!open)
    }
    return (
        <motion.div onHoverStart={handleHover} onHoverEnd={handleHover} animate={{y:[0, isMobile ? 0:20], opacity:[0,1]}} className="gallaryimage">
            <img style={{width:"100%"}} src="/images/Frame-69.png" loading="lazy" alt="" />  
            <motion.div initial="closed" animate={open ?"open" :"close"}  variants={imageOverlayVariants} className="overlayImage">
                <div className="text">{props.title||"Data"}</div>
            </motion.div>
        </motion.div>
    );
}

export default GalleryItem;

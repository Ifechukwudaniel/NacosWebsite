import { motion } from 'framer-motion';
import React from 'react';


const HeaderLink = (props: { href : string , text:string}) => {
    return (
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href={props.href} className="menulink">{props.text}</motion.a>
    );
}

export default HeaderLink;

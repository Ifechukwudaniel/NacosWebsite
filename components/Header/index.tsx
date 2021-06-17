import React, { Fragment, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, y: "-100%" },
    }
    
    const fadeInVariants = {
        open: {opacity: 1, transition: {duration :2}},
        closed: {opacity: 0, transition: {duration :2} }
      };
    const handleHamburger = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <Fragment>
            {
                !isOpen ?
                (
                    <div className="navbar">
                            <img src="images/logo.png" loading="lazy" width="73" alt="" className="navbarlogo"/>
                            <div  className="handbugur mobile">
                            <Hamburger  onToggle={handleHamburger} color="#fff" size={40} />
                        </div>
                        <div  className="handbugur fullscreen">
                            <Hamburger onToggle={handleHamburger} color="#fff" size={40} />
                        </div>
                </div>  
                )
                : (
                <div className="navbar">
                        <img src="images/logo.png" loading="lazy" width="73" alt="" className="navbarlogo"/>
                        <div  className="handbugur mobile">
                        <Hamburger  onToggle={handleHamburger} color="#fff" size={40} />
                    </div>
                    <div  className="handbugur fullscreen">
                        <Hamburger onToggle={handleHamburger} color="#fff" size={40} />
                    </div>
                </div>  
                )
            }
        <motion.div  animate={isOpen ? "open" : "closed"}  variants={variants}  className="menu">
            <div className="maincomtent">
                <div className="menuhalf _1">
                <div className="menuhalfcontent">
                <motion.div variants={fadeInVariants}  animate={isOpen ? "open" : "closed"}  className="menuwrapper">
                        <motion.a  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/" className="menulink">Home</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/payDues" className="menulink">Pay Dues</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/store" className="menulink">Shop</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/election" className="menulink">Election</motion.a>
                        <motion.a  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/event" className="menulink">Event</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}href="/blogs" className="menulink">Blog</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/gallery" className="menulink">Gallery</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/login" className="menulink">Login</motion.a>
                    </motion.div>
                    <div className="socialwrapper">
                    <h1 className="followtextlarge">Follow us on social media</h1>
                    <h3 data-w-id="9c21c51e-eb55-9bf0-94db-5e5b75c824f1" className="followtext">Follow us on social media</h3>
                    <div className="socialiconwrapper">
                        <div className="iconitem"><img src="images/facebooK.png" loading="lazy" width="22" alt="" className="facebookicon"/></div>
                        <div className="iconitem"><img src="images/instagram.png" loading="lazy" alt="" className="twittericon"/></div>
                        <div className="iocnitem"><img src="images/twitter.png" loading="lazy" alt="" className="twittericon"/></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="menuhalf _2">
                <div className="menuhalfcontent">
                    <motion.div variants={fadeInVariants}  animate={isOpen ? "open" : "closed"}  className="menuwrapper largescrren">
                        <motion.a  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/" className="menulink">Home</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/payDues" className="menulink">Pay Dues</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/store" className="menulink">Shop</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/election" className="menulink">Election</motion.a>
                        <motion.a  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/event" className="menulink">Event</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}href="/blogs" className="menulink">Blog</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/gallery" className="menulink">Gallery</motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="/login" className="menulink">Login    </motion.a>
                    </motion.div>
                </div>
                </div>
            </div>
            </motion.div>
     </Fragment>
    );
}

export default Header;

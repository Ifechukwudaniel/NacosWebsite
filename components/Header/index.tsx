import React, { Fragment, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import HeaderLink from './HeaderLink';
import HeaderLinksList from './HeaderLinksList';


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
    console.log(isMobile)
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
                        <img style={{opacity:0}} src="images/logo.png" loading="lazy" width="73" alt="" className="navbarlogo"/>
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
                        <HeaderLinksList/>
                    </motion.div>
                    <div>
                        {
                            !isMobile && (
                                <div className="socialwrapper">
                                    <h1 className="followtextlarge">Follow us on social media</h1>
                                    <h3 data-w-id="9c21c51e-eb55-9bf0-94db-5e5b75c824f1" className="followtext">Follow us on social media</h3>
                                    <div className="socialiconwrapper">
                                        <div className="iconitem"><img src="images/facebooK.png" loading="lazy" width="22" alt="" className="facebookicon"/></div>
                                        <div className="iconitem"><img src="images/instagram.png" loading="lazy" alt="" className="twittericon"/></div>
                                        <div className="iocnitem"><img src="images/twitter.png" loading="lazy" alt="" className="twittericon"/></div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                </div>
                <div className="menuhalf _2">
                    <div className="menuhalfcontent">
                        <motion.div variants={fadeInVariants}  animate={isOpen ? "open" : "closed"}  className="menuwrapper largescrren">
                            <HeaderLinksList/>
                        </motion.div>
                    </div>
                </div>
            </div>
            </motion.div>
    </Fragment>
    );
}

export default Header;

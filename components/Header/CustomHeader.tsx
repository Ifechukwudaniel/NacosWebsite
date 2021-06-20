import React, { Fragment, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import HeaderLink from './HeaderLink';
import HeaderLinksList from './HeaderLinksList';


const CustomHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }
    
    const handleHamburger = ()=>{
        setIsOpen(!isOpen)
    }
    return (
    <Fragment>
        {
                !isOpen ?
                (
                    <div className="navbar custom">
                    <img src="/images/logo.png" loading="lazy" width="74" alt="" className="navbarlogo"/>
                    <div data-w-id="a513d864-86cc-b47c-739c-0f05057179d4" className="handbugur mobile">
                        <Hamburger onToggle={handleHamburger} color="#fff" size={40} />
                    </div>
                    <div data-w-id="a513d864-86cc-b47c-739c-0f05057179d8" className="handbugur fullscreen">
                        <Hamburger onToggle={handleHamburger} color="#fff" size={40} />
                    </div>
                </div>
                )
                : (
                <div className="navbar">
                    <img style={{opacity:0}} src="/images/logo.png" loading="lazy" width="73" alt="" className="navbarlogo"/>
                    <div    className="handbugur mobile">
                    <Hamburger  onToggle={handleHamburger} color="#fff" size={40} />
                </div>
                <div className="handbugur fullscreen">
                    <Hamburger   onToggle={handleHamburger} color="#fff" size={40} />
                </div>
            </div>  
                )
            }
        <motion.div style={{opacity:0}}  animate={isOpen ? "open" : "closed"}  variants={variants}  className="menu">
            <div className="maincomtent">
                <div className="menuhalf _1">
                    <div className="menuhalfcontent">
                            <div className="menuwrapper">
                                <HeaderLinksList/>
                            </div>
                            <div>
                                {
                                    !isMobile && (
                                        <div className="socialwrapper">
                                            <h1 className="followtextlarge">Follow us on social media</h1>
                                            <h3 data-w-id="9c21c51e-eb55-9bf0-94db-5e5b75c824f1" className="followtext">Follow us on social media</h3>
                                            <div className="socialiconwrapper">
                                                <div className="iconitem"><img src="/images/facebooK.png" loading="lazy" width="22" alt="" className="facebookicon"/></div>
                                                <div className="iconitem"><img src="/images/instagram.png" loading="lazy" alt="" className="twittericon"/></div>
                                                <div className="iocnitem"><img src="/images/twitter.png" loading="lazy" alt="" className="twittericon"/></div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menuhalf _2">
                    <div className="menuhalfcontent">
                        <div className="menuwrapper largescrren">
                            <HeaderLinksList/>
                        </div>
                    </div>
                </div>
        </motion.div>
    </Fragment>
    );
}

export default CustomHeader;

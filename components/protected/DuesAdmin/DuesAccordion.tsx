import { motion } from 'framer-motion';
import { useState } from 'react';
import DuesItem from './DuesItem';



const arrowVariants = {
    open: { rotate: 180 , scale:1 },
    closed: { rotate: 0 , scale:1 },
}

const accordionVariants = {
    open: { height: "auto" },
    closed: { height:0 },
}




const DuesAccordion = (props :{ open? :boolean} ) => {
    const  [isOpen , setOpen] = useState(false)
    const [imageSrc, setImageSrc ] = useState("/images/arrow-up.png")

    const arrowClick = ()=>{
        setOpen(!isOpen)
    }

    return (
    <div className="duesaccordin">
        <div className="duesaccordianheader">
            <h3 className="paymentyear">2020/2019 payment</h3>
                <div className="accordingicon">
                    <motion.img  initial="closed" animate={isOpen ?"open" : "closed"}  onClick={arrowClick}  variants={arrowVariants} src={imageSrc} loading="lazy" width="16" alt="" className="searchiocn"/>
                </div>
        </div>
        <motion.div initial="closed" animate={isOpen ?"open" : "closed"}  variants={accordionVariants} style={{overflow:"hidden"}} className="accoredianlist">
            <div className="previouspaymentwrapper accordian">
                <div className="previouspayment">
                    <div className="previouspaymentheader">
                        <div className="previousheadertext accordain">Name</div>
                        <div className="previousheadertext accordain mobile">Date of Payment</div>
                        <div className="previousheadertext accordain"> Amount</div>
                    </div>
                    <div  style={{width: "100%" }}>
                        <DuesItem/>
                        <DuesItem/>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
    );
}

export default DuesAccordion;

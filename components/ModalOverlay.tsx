import { motion } from 'framer-motion';
import React , {useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { isMobile } from 'react-device-detect';



const variants = {
    open: { opacity: 1, height: "100vh", duration:2, display:"block" },
    closed: { opacity: 0, height: "0vh", duration:2 , display:"none"},
}

const override = css`
    display: block;
    margin:  auto;
`;

const ModalOverlay = (props: {active :boolean ,title:string, onClose : any, children ?: JSX.Element }) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <motion.div style={{display:"block", }} initial="closed" animate={props.active ? "open" : "closed"} variants={variants} className="addcontentmodal">
            <div className="contentmodalclise">
            <motion.div  animate={{scale:0.8}} onClick={props.onClose} whileTap={{scale:1}}  className="addcontentclose w-inline-block">
                <motion.img animate={{scale:1}} onClick={props.onClose} whileTap={{scale:1}}  src="/images/close.png" loading="lazy" alt="" className="deleteicon"/>
                </motion.div>
            </div>
            <h3 className="addcontentmodaltitle">{props.title}</h3>
            {props.children}
        </motion.div>
    );
}

export default ModalOverlay;

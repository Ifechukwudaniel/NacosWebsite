import { motion } from 'framer-motion';
import React , {useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { isMobile } from 'react-device-detect';



const variants = {
    open: { opacity: 1, height: "100vh" },
    closed: { opacity: 0, height: "0vh" },
}

const override = css`
    display: block;
    margin:  auto;
`;

const LoadingOverlay = (props: {active :boolean ,text:string}) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <motion.div  style={{zIndex:100000000, opacity :0.5}}   animate={ props.active ? "open" : "closed"} variants={variants} transition={{duration:0.5}} className="menu">
            <div style={{margin:'auto', marginTop:'40vh'}}>
                <ClipLoader color={color} loading={loading} css={override} size={150} />
                <h2 style={{color:"#fff"}}> { props.text}</h2>
            </div>
        </motion.div>
    );
}

export default LoadingOverlay;

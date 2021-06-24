import download from '@utils/download';
import { motion } from 'framer-motion';
import React from 'react';

const MaterialItem = (props: {title:string ,fileLink:string}) => {
    return (
        <div className="materialitem">
            <h3 className="materialtitle">{props.title} </h3>
            <motion.div whileTap={{scale:0.8}} className="dowloadwrppaer">

                <img src="/images/download-1.svg" onClick={()=>download(props.fileLink,props.title)} loading="lazy" width="70" alt="" className="dowloadicon"/>
            </motion.div>
        </div>
    );
}

export default MaterialItem;

import { motion } from 'framer-motion';
import React from 'react';

const MaterialItem = () => {
    return (
        <div className="materialitem">
            <h3 className="materialtitle">CSC 141 2020 Past Question</h3>
            <motion.div whileTap={{scale:0.8}} className="dowloadwrppaer">
                <img src="/images/download-1.svg" loading="lazy" width="70" alt="" className="dowloadicon"/>
            </motion.div>
        </div>
    );
}

export default MaterialItem;

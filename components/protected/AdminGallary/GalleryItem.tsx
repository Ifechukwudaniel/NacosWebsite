import { motion } from 'framer-motion';
import React from 'react';

const GalleryItemAdmin = () => {
    return (
        <div  className="imageitem">
            <motion.img whileTap={{scale:0.5}} src="/images/dotIcon.png" loading="lazy" alt="" className="dotedimage"/>
            <img src="/images/galary.png" loading="lazy" alt="" className="imagegalary"/>
            <h5 className="gallarytitle">Getting Scholarship Abroad</h5>
            <div  className="deletebutton w-inline-block">
                <motion.img whileTap={{scale:0.5}} src="/images/close.png" loading="lazy" alt="" className="deleteicon img"/>
            </div>
        </div>
    );
}

export default GalleryItemAdmin;

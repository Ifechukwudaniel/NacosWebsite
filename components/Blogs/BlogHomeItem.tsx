import React, { useState , useEffect} from 'react';
import { motion, useAnimation  } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const BlogHomeItem = () => {
    const controls = useAnimation();
    const { ref,inView, entry } = useInView({
        threshold:[0, 1],
        triggerOnce: false
    });

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        show: { opacity: 1 , transition: { duration: 0.5 }},
        hidden: { 
            opacity: 0,
            transition: { duration: 0.5 }
        },
    }

      useEffect(() => {
        setIsOpen(inView)
      }, [controls, inView]);

    return (
    <motion.div ref={ref} initial="hidden"  animate={isOpen ? "show" : "hidden"} variants={variants} className="blogitem _1">
        <img src="images/blogImage.png" loading="lazy" width="345" alt="" className="blogimage"/>
            <div className="blogcontent">
            <a href="#" className="blogtitle">Application for Advertised Course/ Staff form Request</a>
            <div className="text-block-2">17th June 2021</div>
            </div>
      </motion.div>
    );
}

export default BlogHomeItem;

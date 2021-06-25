import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BlogItem = (props:{title:string,image:string,date:string  }) => {

    const controls = useAnimation();
    const { ref,inView, entry } = useInView({
        threshold:[0, 1],
        triggerOnce: false
    });

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        show: {  opacity:1 , transition: { duration: 1}},
        hidden: { 
            opacity:0,
            transition: { duration: 1 }
        },
    }

      useEffect(() => {
        setIsOpen(inView)
      }, [controls, inView]);
    return (
        <motion.div ref={ref} initial="hidden"  animate={isOpen ? "show" : "hidden"} variants={variants} className="blogpageitem"><img src="/images/blogImage.png" loading="lazy" width="173.5" alt="" className="blogimage"/>
                <div className="blogcontent">
                    <a href="/blogs/hhshs" className="blogtitle">Getting Scholarship Abroad.  The Fastest Way to Becoming a Scholar</a>
                <div className="text-block-2">17th June 2021</div>
            </div>
      </motion.div>
    );
}

export default BlogItem;

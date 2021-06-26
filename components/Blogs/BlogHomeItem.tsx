import React, { useState , useEffect} from 'react';
import { motion, useAnimation  } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { Blog, IBlog } from '@models/Blogs';
import moment from 'moment';

const BlogHomeItem = (props :{ date:Date, title:string , blogImage:string, slug :string} ) => {
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
        <img src={`${props.blogImage}`} loading="lazy" width="345" alt="" className="blogimage"/>
            <div className="blogcontent">
            <a href={`/blogs/${props.slug}`} className="blogtitle">{props.title}</a>
            <div className="text-block-2">{moment(props.date).format("DD MMMM YYYY")}</div>
            </div>
      </motion.div>
    );
}

export default BlogHomeItem;

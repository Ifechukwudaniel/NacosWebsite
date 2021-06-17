import { motion , useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const EventItem = (props: {date :Number,month :string, title:string,  description: string }) => {
  const controls = useAnimation();
  const { ref,inView, entry } = useInView({
      threshold:[0, 1],
      triggerOnce: false
  });

  const [isOpen, setIsOpen] = useState(false)

  const variants = {
      show: { x:"0vw" , transition: { duration: 0.5 }},
      hidden: { 
          x:"-100vw",
          transition: { duration: 0.5 }
      },
  }

    useEffect(() => {
      setIsOpen(inView)
    }, [controls, inView]);

    return (
        <motion.div className="eventitem eventpage">
          <div className="eventdate">
            <h4 className="dateinmonth">{props.date}</h4>
            <h4 className="dateinmonth dateday">{props.month}</h4>
          </div>
          <div className="eventcontent">
            <h3 className="eventti">{props.title}</h3>
            <div className="eventti eventdescription">{props.description}</div>
          </div>
        </motion.div>
    );
}

export default EventItem;

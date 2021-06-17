import Candidate from '@typeDefs/Candidate';
import { motion, useAnimation  } from "framer-motion"
import React, { useState, useEffect } from 'react';
import {useInView, }from 'react-intersection-observer';
import CandidateItem from './CandidateItem';



const CandidateCard = (props:{position:string, candidateList:Candidate[]}) => {

    const controls = useAnimation();
    const { ref,inView, entry } = useInView({
        threshold:[0, 1],
        triggerOnce: false
    });

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        show: { width: "100%", opacity:1 , transition: { duration: 1}},
        hidden: { 
            width: "0%" ,
            opacity:0,
            transition: { duration: 1 }
        },
    }

      useEffect(() => {
          if(!isOpen) return setIsOpen(inView)
      }, [controls, inView]);


    const [disabled, setDisabled ] = useState<boolean>(false)
    const onVote= (id:string)=>{
        let voteIndex=  props.candidateList.findIndex((x)=>x.id==id)
        setDisabled(true)
        props.candidateList[voteIndex].voted= true
        ///vote for candidate
        console.log(props.candidateList[voteIndex].name, props.position)
    }

    return (
    <motion.div ref={ref} initial="hidden"  animate={isOpen ? "show" : "hidden"}  variants={variants} className="candidatecard">
        <h3 className="candidatecardtitle">{props.position}</h3>
        <div className="candiatelist">
            {props.candidateList.map((x, i)=>(<CandidateItem disabled= {disabled} key={i} onVote={onVote} {...x} />))}
        </div>
    </motion.div>
    );
}

export default CandidateCard;

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';


type Props = {
    name: string;
    image: string;
    onVote: (id: string) => void;
    id:string,
    voted:boolean, 
    disabled:boolean
};

const CandidateItem = ({name,image,onVote, id, voted, disabled }:Props) => {
    const [vote, setVoteState] =  useState<Boolean>(false)
    const color =  "rgb(4 138 2)"

    const voteAnimation = {Voted:{ backgroundColor:color,transitions:{duration: 1} },notVoted:{backgroundColor:"#343a40" ,transitions:{duration: 1}}}

    useEffect(() => {
        if(vote) return  onVote(id)
    }, [vote]);

    

    return (
        <motion.div animate= { voted ? "Voted" : "notVoted"} initial="notVoted" variants={voteAnimation}  className="candidateitem">
            <motion.img  onClick={()=>{  setVoteState( !disabled ? true: false)}} whileHover={{ scale: !disabled ? 1.1 :1 }} whileTap={{ scale:!disabled? 0.9:1  }} src={image} loading="lazy" alt="" className="resultimage" />
            <h4 className="resultname election">{name}</h4>
        </motion.div>
    );
}

export default CandidateItem;

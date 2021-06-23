import ModalOverlay from '@components/ModalOverlay';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';


const AdminVoteItem = () => {

    const [ edit, setEdit ] = useState(false)

    return (
        <div className="electionitem">
            <h2 className="electiontitle">President Election</h2>
            <ModalOverlay onClose={()=>setEdit(!edit)} title="Edit Poll" active={edit}/>
                <div className="editwrapper">
                    <div className="blogadminedit electionadmin election">
                    <motion.div  whileTap={{scale:0.7}}  className="edittext election">View Results</motion.div>
                    </div>
                    <motion.div onClick={()=>setEdit(!edit)}  whileTap={{scale:0.7}} className="blogadminedit electionadmin">
                        <img src="/images/edit_2edit.png" loading="lazy" alt="" className="editicon"/>
                        <div className="edittext">Edit</div>
                    </motion.div>
                </div>
        </div>
    );
}

export default AdminVoteItem;

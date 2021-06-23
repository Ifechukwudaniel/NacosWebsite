import ModalOverlay from '@components/ModalOverlay';
import ConfirmAlertHook from '@hooks/ConfirmAlertHook';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';


const AdminEventItem = () => {
    const [ edit, setEdit ] = useState(false)

    const handleClickDelete = ()=>{
        console.log("delete")
    }

    return (
        <div className="eventitem eventpage">
            <ModalOverlay onClose={()=>setEdit(!edit)} title="Edit Event" active={edit}/>
            <div className="eventdate">
                <h4 className="dateinmonth">1</h4>
                <h4 className="dateinmonth dateday">March</h4>
            </div>
            <div className="eventcontent">
                <h3 className="eventti">NACOS Dinner</h3>
            </div>
            <motion.div onClick={()=>setEdit(!edit)} whileTap={{scale:0.7}} className="blogadminedit electionadmin">
                <img src="/images/edit_2edit.png" loading="lazy" alt="" className="editicon"/>
                <div className="edittext">Edit</div>
            </motion.div>
            <motion.div onClick={ ()=> ConfirmAlertHook(handleClickDelete)} whileTap={{scale:0.7}} className="blogadminedit electionadmin">
                <img src="/images/delete.png" loading="lazy" alt="" className="editicon"/>
                <div className="edittext delete">Delete</div>
            </motion.div>
        </div>
    );
}

export default AdminEventItem;

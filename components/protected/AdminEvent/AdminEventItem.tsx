import ModalOverlay from '@components/ModalOverlay';
import ConfirmAlertHook from '@hooks/ConfirmAlertHook';
import { IEvent } from '@models/Events';
import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import AdminEventForm from './AdminEventForm';

const AdminEventItem = (props:{title? :string ,description?:string, date ?: Date , _id ?:string, onClickDelete? : Function}) => {
    const [ edit, setEdit ] = useState(false)

    const handleClickDelete = ()=>{
        props.onClickDelete(props._id)
    }

    const handleEditItem = ()=>{
        setEdit(!edit)
    }

    return (
        <div className="eventitem eventpage">
            <ModalOverlay onClose={()=>setEdit(!edit)} title="Edit Event" active={edit}>
                <AdminEventForm edit={true} title={props.title} date={props.date} description={props.description} handleClose={handleEditItem}/>
            </ModalOverlay>
            <div className="eventdate">
                <h4 className="dateinmonth"> {moment(props.date).date()}</h4>
                <h4 className="dateinmonth dateday">{moment(props.date).format("MMM")}</h4>
            </div>
            <div className="eventcontent">
                <h3 className="eventti">{props.title}</h3>
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

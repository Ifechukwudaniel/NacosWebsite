import ModalOverlay from '@components/ModalOverlay';
import ConfirmAlertHook from '@hooks/ConfirmAlertHook';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import GalleryForm from './GalleryForm';


const GalleryItemAdmin = (props:{title,onEdit:Function, onDelete:Function}) => {
    const [ edit , setEdit] = useState(false)

    const handleDelete =()=>{
        props.onDelete()
    }

    const handleEdit =()=>{
        setEdit(!edit)
        props.onEdit()
    }


    return (
        <div  className="imageitem">
            <ModalOverlay onClose={()=>setEdit(!edit)} title="Edit Gallery" active={edit}>
                <GalleryForm title={props.title} handleSubmit={handleEdit} edit={true}/>
            </ModalOverlay>
            <motion.img onClick={handleEdit} whileTap={{scale:0.5}} src="/images/dotIcon.png" loading="lazy" alt="" className="dotedimage"/>
            <img src="/images/galary.png" loading="lazy" alt="" className="imagegalary"/>
            <h5 className="gallarytitle">{props.title}</h5>
            <div  className="deletebutton w-inline-block">
                <motion.img onClick={()=>ConfirmAlertHook(handleDelete)} whileTap={{scale:0.5}} src="/images/close.png" loading="lazy" alt="" className="deleteicon img"/>
            </div>
        </div>
    );
}

export default GalleryItemAdmin;

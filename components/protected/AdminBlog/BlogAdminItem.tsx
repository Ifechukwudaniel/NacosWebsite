import ModalOverlay from '@components/ModalOverlay';
import ConfirmAlertHook from '@hooks/ConfirmAlertHook';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import BlogAdminForm from './BlogAdminForm';


const BlogAdminItem = (props:{_id?:string, blogImage?:string, handleEditBlog:Function, title:string, htmlData:string}) => {
    const [edit , setEdit] = useState(false)

    const handleClickDelete = ()=>{
        console.log(props._id)
    }

    return (
        <div className="blogadminitem">
            <ModalOverlay onClose={()=>setEdit(!edit)} title="Edit Blog" active={edit}>
                <BlogAdminForm htmlData={props.htmlData} title={props.title}  handleClose={()=>setEdit(!edit)} handleSubmit={props.handleEditBlog} edit={edit}/>
            </ModalOverlay>
            <img src={`${props.blogImage}`} loading="lazy" alt="" className="blogadminimage"/>
            <div style={{marginLeft:30}} className="blogadmintitlewrapper">
                <h1 className="blogtitle admin">{props.title}</h1>
            </div>
            <motion.div onClick={()=>setEdit(!edit)} whileTap={{scale:0.7}}  className="blogadminedit"><img src="/images/edit_1.png" loading="lazy" alt="" className="editicon"/>
                <div className="edittext">Edit</div>
            </motion.div>
            <motion.div whileTap={{scale:0.7}} onClick={()=>ConfirmAlertHook(handleClickDelete)} className="blogadminedit"><img src="/images/delete.png" loading="lazy" alt="" className="editicon"/>
                <div className="edittext delete">Delete</div>
            </motion.div>
        </div>
    );
}

export default BlogAdminItem;

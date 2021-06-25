import { motion } from 'framer-motion';
import React from 'react';
import PreviewsUpload from '@components/PreviewUpload';
import PreviewUpload from '@components/PreviewUpload';
import draftToHtml from 'draftjs-to-html';
import {convertToRaw } from 'draft-js';
import { useState } from 'react';

const BlogAdminForm = (props: {htmlData ?: string,title?:string, description?:string, handleClose?: Function, handleSubmit? :Function, edit? : boolean }) => {
    const [title, setTitle]= useState(props.title)
    const [image, setImage ] = useState("")
    const [htmlData, setHtmlData] = useState("")

    const handleChange= (editorState)=>{
        setHtmlData(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    const onUpload= (x)=>{
        setImage(x)
    }
    const handleSubmit = ()=>{
        if(!image.length || !title ||!htmlData)  return alert("The Form is not correct")
        return props.handleSubmit({title, image, htmlData})
    }
    
    return (
        <div style={{width:"60%", margin:"0 auto", marginTop:"2%", height:"auto",}}>
            <PreviewUpload onImageUpload={onUpload}/>
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Blog Title </label>
            <input  onChange={(e)=>setTitle(e.target.value)} value={title|| ""}  className="signinput w-input"/> 
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Blog Content </label>
            <motion.div onClick={(e)=>{e.preventDefault(),handleSubmit()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Blog" :"Create New Blog"}<br/></motion.div>
        </div>
    );
}

export default BlogAdminForm;

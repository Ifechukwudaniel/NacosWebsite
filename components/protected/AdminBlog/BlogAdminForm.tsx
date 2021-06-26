import { motion } from 'framer-motion';
import React from 'react';
import PreviewUpload from '@components/PreviewUpload';
import { useState } from 'react';
import WYSIWYGCKEditor from '@components/WYSIWYGCKEditor';

const BlogAdminForm = (props: {htmlData ?: string,title?:string, description?:string, handleClose?: Function, handleSubmit? :Function, edit? : boolean }) => {
    const [title, setTitle]= useState(props.title ||"")
    const [image, setImage ] = useState("")
    const [htmlData, setHtmlData] = useState(props.htmlData || "")
    console.log(props)

    const handleChange= (editorState)=>{
        setHtmlData(editorState)
    }

    const onUpload= (x)=>{
        setImage(x)
    }
    const handleSubmit = ()=>{
        if(!props.edit && !image.length)  return alert("There is no image")
        if(!title)  return alert("There is no title")
        if(!htmlData)  return alert("There is blogContent")
        return props.handleSubmit({title, image, htmlData})
    }
    
    return (
        <div style={{width:"60%", margin:"0 auto", marginTop:"2%", height:"auto",}}>
            <PreviewUpload onImageUpload={onUpload}/>
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Blog Title </label>
            <input  onChange={(e)=>setTitle(e.target.value)} value={title|| ""}  className="signinput w-input"/> 
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Blog Content </label>
            <WYSIWYGCKEditor initialValue={props.htmlData} onChange={handleChange}/>
            <motion.div onClick={(e)=>{e.preventDefault(),handleSubmit()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Blog" :"Create New Blog"}<br/></motion.div>
        </div>
    );
}

export default BlogAdminForm;

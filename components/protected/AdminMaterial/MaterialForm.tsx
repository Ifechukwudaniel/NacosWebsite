import React from 'react';
import PreviewUpload from '@components/PreviewUpload';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Boolean } from 'aws-sdk/clients/codebuild';



const MaterialForm = (props:{title?:string, edit?:Boolean, handleSubmit:Function}) => {
    const [title, setTitle]= useState(props.title||"")
    const [file, setFile ] = useState("")

    const onUpload= (x,file)=>{
        setFile(x)
    }
    const handleSubmit = ()=>{
        if(!title )  return alert("The Form is not correct")
        return props.handleSubmit({title, file})
    }

    return (
        <div style={{width:"60%", margin:"0 auto", marginTop:"2%", height:"auto",}}>
            <PreviewUpload file={true} nonImage={true} onImageUpload={onUpload}/>
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Material Title </label>
            <input  onChange={(e)=>setTitle(e.target.value)} value={title|| ""}  className="signinput w-input"/> 
            <motion.div onClick={(e)=>{e.preventDefault(),handleSubmit()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Material" :"Create New Materials"}<br/></motion.div>
        </div>
    );
}

export default  MaterialForm;

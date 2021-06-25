import React from 'react';
import PreviewUpload from '@components/PreviewUpload';
import { motion } from 'framer-motion';
import { useState } from 'react';



const GalleryForm = (props:{title?:string, edit?:Boolean, handleSubmit:Function}) => {
    const [title, setTitle]= useState(props.title||"")
    const [image, setImage ] = useState("")

    const onUpload= (x)=>{
        setImage(x)
    }

    const handleSubmit = ()=>{
        if(!image.length || !title )  return alert("The Form is not correct")
        return props.handleSubmit({title, image})
    }

    return (
        <div style={{width:"60%", margin:"0 auto", marginTop:"2%", height:"auto",}}>
            <PreviewUpload nonImage={false} onImageUpload={onUpload}/>
            <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Image Title </label>
            <input  onChange={(e)=>setTitle(e.target.value)} value={title|| ""}  className="signinput w-input"/> 
            <motion.div onClick={(e)=>{e.preventDefault(),handleSubmit()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Image" :"Create New Image"}<br/></motion.div>
        </div>
    );
}

export default GalleryForm;

import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import React from 'react';
import { useState } from 'react';



const AdminEventForm = (props: {date ?: Date,title?:string, description?:string,onSubmit?:Function, handleClose?: Function, edit? : boolean }) => {
    const [startDate, setStartDate] = useState( props.date  ? new Date(props.date):new Date() );
    const [title, setTitle]= useState(props.title||"");
    const [description, setDescription] = useState(props.description||"")

    const handleSubmit = ()=>{
        if(!startDate) return alert("Please input a date")
        if(!title) return alert("Please input a title")
        if(!description) return alert("Please input a description")
        props.onSubmit({date:startDate, title,description})
        return setDescription(""),setTitle("")
    }
    return (
    <div style={{width:"40%", margin:"0 auto", marginTop:"5%", height:"auto"}}>
        <label style={{fontSize:17, marginTop:30, color:"#fff", fontFamily:"DM Sans"}}> Date</label>
        <DatePicker  className="signinput w-input" selected={startDate} onChange={(date) => setStartDate(date)} />
        <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Title</label>
        <input onChange={(e)=>setTitle(e.target.value)} value={title}  className="signinput w-input"/>
        <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Description </label>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} cols={4} rows={5}  className="signinput w-input"/>
        <motion.div onClick={(e)=>{e.preventDefault(),handleSubmit(),props.handleClose()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Event " :"Create New Event"}<br/></motion.div>
    </div>
    );
}

export default AdminEventForm;

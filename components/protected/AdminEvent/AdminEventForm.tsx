import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import React from 'react';
import { useState } from 'react';



const AdminEventForm = (props: {date ?: Date,title?:string, description?:string, handleClose?: Function, edit? : boolean }) => {
    const [startDate, setStartDate] = useState( props.date  ? new Date(props.date):new Date() );
    return (
    <div style={{width:"40%", margin:"0 auto", marginTop:"5%", height:"auto"}}>
        <label style={{fontSize:17, marginTop:30, color:"#fff", fontFamily:"DM Sans"}}> Date</label>
        <DatePicker  className="signinput w-input" selected={startDate} onChange={(date) => setStartDate(date)} />
        <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Title</label>
        <input value={props.title|| ""}  className="signinput w-input"/>
        <label style={{fontSize:17, marginTop:20, color:"#fff"}}> Description </label>
        <textarea value={props.description|| ""} cols={4} rows={5}  className="signinput w-input"/>
        <motion.div onClick={(e)=>{e.preventDefault(),props.handleClose()}} whileTap={{scale:1.2}}  className="createitembutton addimagebutton w-button closeForm">{props.edit ?" Edit Event " :"Create New Event"}<br/></motion.div>
    </div>
    );
}

export default AdminEventForm;

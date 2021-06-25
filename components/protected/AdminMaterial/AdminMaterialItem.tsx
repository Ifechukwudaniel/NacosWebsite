import ConfirmAlertHook from '@hooks/ConfirmAlertHook';
import { motion } from 'framer-motion';
import React from 'react';

const AdminMaterialItem = (props:{title:string}) => {
    const handleClickDelete = ()=>{
        console.log("delete")
    }

    return (
        <div className="materialitem">
            <h3 className="materialtitle">{props.title}</h3>
            <motion.div onClick={()=>ConfirmAlertHook(handleClickDelete)} whileTap={{scale:0.8}} className="dowloadwrppaer">
                <img style={{width:30 , height:30}} src="/images/delete.png" loading="lazy" width="70" alt="" className="dowloadicon"/>
            </motion.div>
        </div>
    );
}

export default AdminMaterialItem;

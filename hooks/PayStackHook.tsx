import { motion } from 'framer-motion';
import React from 'react';
import { usePaystackPayment as usePayStackPayment } from 'react-paystack';


const PayStackHook = (props:{disabled:boolean,onClose: any, onSuccess:any}) => {

    const config : any = {
        reference: (new Date()).getTime(),
        email: "dandyanmicx@gmail.com",
        amount: 300000,
        publicKey: 'pk_test_ccd537b2265e1bbf1ed481881fd0f7fd6f61e95d',
    };
    
    const handleSuccess = (reference) => {
        props.onSuccess(reference);
    };

    const handleClose = () => {
        props.onClose()
    }
    
    const initializePayment =  usePayStackPayment(config);

    return (
        <div>
            <motion.input whileTap={{scale:0.8}} disabled={props.disabled} onClick= {()=>{
                initializePayment(handleSuccess, handleClose)
            }} type="submit" value="Make Payment" data-wait="Please wait..." className="profilesubmitbutton w-button"/>
        </div>
    );
};



export default PayStackHook
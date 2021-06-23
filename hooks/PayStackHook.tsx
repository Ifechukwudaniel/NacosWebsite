import React from 'react';
import { usePaystackPayment as usePayStackPayment } from 'react-paystack';


const PayStackHook = () => {

    const config : any = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    };
    
    const onSuccess = (reference) => {
        console.log(reference);
    };

    const onClose = () => {
        console.log('closed')
    }
    
    const initializePayment =  usePayStackPayment(config);

    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
    );
};



export default PayStackHook
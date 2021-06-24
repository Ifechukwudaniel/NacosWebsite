import React from 'react';
import {IPayedDuesItem} from '@models/PayedDues'
import moment from 'moment';


const DuesItem = (props:IPayedDuesItem) => {
    return (
        <div className="previouspaymentitem">
            <div className="previouspaymentlisttext">{props.user.name}</div>
            <div className="previouspaymentlisttext mobile">{ moment(props.date).format('DD MMMM YYYY')}</div>
            <div className="previouspaymentlisttext">{props.amount} NGN</div>
            <div className="previouspaymentprint">
                <a href="#" className="printreceipt">Print Reciept</a>
            </div>
        </div>
    );
}

export default DuesItem;

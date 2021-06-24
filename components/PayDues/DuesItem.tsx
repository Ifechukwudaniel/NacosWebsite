import moment from 'moment';
import React from 'react';

const DuesItem = (props : {section: string , date: string, amount: string}) => {
    return (
            <div className="previouspaymentitem">
                    <div className="previouspaymentlisttext">{props.section}</div>
                    <div className="previouspaymentlisttext">{moment (props.date).format('DD MMMM YYYY')}</div>
                    <div className="previouspaymentlisttext">{props.amount} NGN</div>
                    <div className="previouspaymentprint">
                    <a href="#" className="printreceipt">Print Reciept</a>
                    </div>
        </div>
    );
}

export default DuesItem;

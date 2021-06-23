import React from 'react';

const DuesItem = () => {
    return (
        <div className="previouspaymentitem">
            <div className="previouspaymentlisttext">Victor Osundu</div>
            <div className="previouspaymentlisttext mobile">20th January 2021</div>
            <div className="previouspaymentlisttext">5000 NGN</div>
            <div className="previouspaymentprint">
                <a href="#" className="printreceipt">Print Reciept</a>
            </div>
        </div>
    );
}

export default DuesItem;

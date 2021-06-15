import React from 'react';

const DuesForm = () => {
    return (
        <div className="payduesformwrapper w-form">
            <form id="email-form" name="email-form" data-name="Email Form" className="payduesform">
                <label className="profilelabel">Session</label>
                    <select id="field" name="field" className="profileinput payduesinput w-select">
                        <option value="">Select Section ...</option>
                        <option value="2018/2019">2018/2019</option>
                    </select>
                <input type="submit" value="Make Payment" data-wait="Please wait..." className="profilesubmitbutton w-button"/>
            </form>
        </div>
    );
}

export default DuesForm;

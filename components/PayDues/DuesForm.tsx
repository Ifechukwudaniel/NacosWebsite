import PayStackHook from '@hooks/PayStackHook';
import React, { HtmlHTMLAttributes, useState, useEffect } from 'react';



const DuesForm = (props: {onSuccessPaymentComplete:Function}) => {
    const  [ section , setSection ] = useState<string>()
    const [ sectionList , setSectionsList ] = useState<string[]>([])
    const [disabled , setDisabled ] = useState(true)

    useEffect(() => {
        let currentYear =   new Date().getFullYear()+1
        let allYears =  [0,1, 2,3,].map(x=>currentYear -x)
        let sectionStrings : string[] = allYears.map((x, i)=> `${x}/${allYears[i+1] ? allYears[i+1] : (allYears[i])-1 }`)
        setSectionsList(sectionStrings)
    }, []);

    const handleSectionChange :React.ChangeEventHandler<HTMLSelectElement> = (event)=>{
        setSection(event.target.value);
        if(event.target.value) return  setDisabled(false)
        return setDisabled(true)
    }

    const handleSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        console.log(section)
    }

    const onSuccessPayment = (x)=>{
       props.onSuccessPaymentComplete(x)
    }

    const onClose = ()=>{}

    return (
        <div className="payduesformwrapper w-form">
            <form onSubmit={handleSubmit} className="payduesform">
                <label className="profilelabel">Session</label>
                    <select onChange={handleSectionChange}  name="section" className="profileinput payduesinput w-select">
                        <option style={{background:"#fff"}} value="">Select Section ...</option>
                        {
                            sectionList.map((x, i)=>(
                                <option key = {i} value={`${x}`}>{x}</option>
                            ))
                        }
                    </select>
                <PayStackHook disabled={disabled} onSuccess={onSuccessPayment} onClose={onClose}/>
            </form>
        </div>
    );
}

export default DuesForm;

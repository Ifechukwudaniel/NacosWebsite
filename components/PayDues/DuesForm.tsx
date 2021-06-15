import React, { HtmlHTMLAttributes, useState, useEffect } from 'react';


const DuesForm = () => {
    const  [ section , setSection ] = useState<string>()
    const [ sectionList , setSectionsList ] = useState<string[]>([])

    useEffect(() => {
        let currentYear =   new Date().getFullYear()+1
        let allYears =  [0,1, 2,3,].map(x=>currentYear -x)
        let sectionStrings : string[] = allYears.map((x, i)=> `${x}/${allYears[i+1] ? allYears[i+1] : (allYears[i])-1 }`)
        setSectionsList(sectionStrings)
    }, []);

    const handleSectionChange :React.ChangeEventHandler<HTMLSelectElement> = (event)=>{
        setSection(event.target.value);
    }

    const handleSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        console.log(section)
    }

    return (
        <div className="payduesformwrapper w-form">
            <form onSubmit={handleSubmit} className="payduesform">
                <label className="profilelabel">Session</label>
                    <select onChange={handleSectionChange}  name="section" className="profileinput payduesinput w-select">
                        <option value="">Select Section ...</option>
                        {
                            sectionList.map((x, i)=>(
                                <option key = {i} value={`${x}`}>{x}</option>
                            ))
                        }
                    </select>
                <input type="submit" value="Make Payment" data-wait="Please wait..." className="profilesubmitbutton w-button"/>
            </form>
        </div>
    );
}

export default DuesForm;

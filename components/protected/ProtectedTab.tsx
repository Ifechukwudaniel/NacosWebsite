import React from 'react';
import { useRouter } from 'next/router'


const ProtectedTab = () => {
    const router = useRouter();
    return (
        <div  className="adminheadermenu">
                    <div className="adminheader">
                        <a onClick={(e)=>{
                            e.preventDefault()
                            router.push('/protected/EventAdmin',  null, { shallow: true })
                        }} className={ router.pathname=== "/protected/EventAdmin" ? "adminhederitem active w--current"  :" adminhederitem"} >Events</a>
                        
                        <a  onClick={()=>{
                            router.push('/protected/BlogAdmin', null, { shallow: true })
                        }} className={ router.pathname=== "/protected/BlogAdmin" ? "adminhederitem active w--current"  :" adminhederitem"}>Blogs</a>

                        <a onClick={()=>{
                            router.push('/protected/VoteAdmin',  null, { shallow: true })
                        }} className={ router.pathname=== "/protected/VoteAdmin" ? "adminhederitem active w--current"  :" adminhederitem"}>Voting</a>

                        <a  onClick={()=>{
                            router.push('/protected/DuesAdmin',  null, { shallow: true })
                        }} className={ router.pathname=== "/protected/DuesAdmin" ? "adminhederitem active w--current"  :" adminhederitem"}>Dues</a>

                        <a onClick={()=>{
                            router.push('/protected/AdminGallary' ,null, { shallow: true })
                        }} className={ router.pathname=== "/protected/AdminGallary" ? "adminhederitem active w--current"  :" adminhederitem"}>Gallery</a>

                    </div>
        </div>
    );
}

export default ProtectedTab;

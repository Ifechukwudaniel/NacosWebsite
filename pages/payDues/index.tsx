import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Footer from '../../components/Footer';
import CustomHeader from '../../components/Header/CustomHeader';
import DuesForm from '../../components/PayDues/DuesForm';
import DuesHeader from '../../components/PayDues/DuesHeader';
import DuesItem from '../../components/PayDues/DuesItem';
import { useSession ,getSession} from "next-auth/client"
import {  IUser} from '@models/User'
import axios from 'axios'
// import styles from '../styles/Home.module.css'

export default function PayDuesPage(props:{session ,userPayedDues, user}) {

    const [hasPreviousPayments, setHasPreviousPayments] = useState<Boolean>(props.userPayedDues.length > 0 ? true : false);
    // console.log(props.session, props.user, !props.userPayedDues.length)
    console.log(props.userPayedDues)

    const handleSuccessPayment =  (data)=>{
        console.log(props.user, data)
    }
    return (
        <div>
            <CustomHeader/>
            <div className="profilepagecontainer">
                <h3 className="profilepagetitle payduestitle">Pay Dues</h3>
            </div>
            <div className="paydues">
                <DuesForm onSuccessPaymentComplete= {handleSuccessPayment}/>
                {
                hasPreviousPayments && (
                    <div className="profilepagecontainer">
                    <h3 className="profilepagetitle payduestitle previouspayments">Previous Payments</h3>
                </div>
                )
                }
            </div>
            <div className="previouspaymentwrapper">
                {
                    hasPreviousPayments && (
                            <div className="previouspayment">
                                <DuesHeader/>
                                {
                                    props.userPayedDues.map((x, i)=>(
                                        <DuesItem  {...x}/>

                                    ))
                                }
                            </div>
                    )}
            </div>
            <Footer/>
        </div>
    )
}



export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(!session){
        context.res.writeHead(302, { Location: '/login' });
        return context.res.end();
    }

    let  {user}:{user: IUser} = await (await axios.post(`${process.env.URL}/api/users/find`,{ email:session.user['email']})).data
    let {userPayedDues} = await (await axios.post(`${process.env.URL}/api/dues/userDues`,{ email:session.user['email']})).data
    return {
        props: { session,userPayedDues,user  }
    }
}
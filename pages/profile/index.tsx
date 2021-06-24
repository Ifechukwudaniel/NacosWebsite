import Head from 'next/head'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import Footer from '../../components/Footer'
import CustomHeader from '../../components/Header/CustomHeader'
import { useSession ,getSession} from "next-auth/client"
import {  IUser} from '@models/User'
import axios from 'axios'
// import styles from '../styles/Home.module.css'

export default function ProfilePage(props: {session, user}) {
  const [session, loading] = useSession()
  const [name, setName]= useState(props.user.name)
  const [matricNumber, setMatricNumber]= useState(props.user.matricNumber)
  const [email, setEmail]= useState(props.user.email)
  const [level, setLevel]= useState(props.user.level)

  const handleSubmit = ()=>{
    console.log(name, matricNumber, level, email)
  }

  return (
    <Fragment>
      <CustomHeader/>
        <div className="profile">
          <div className="profilecontent">
            <div className="profileformcontainer">
              <div className="profileform wrapper w-form">
                <form  className="profileform">
                    <img src={props.user.userImage} loading="lazy" alt="" className="profileimage"/>
                    <label  className="profilelabel">Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" className="profileinput w-input" maxLength={256} name="name"   />
                    <label className="profilelabel">Registration Number</label>
                    <input value={matricNumber} type="text" className="profileinput w-input" maxLength={256} name="regNumber"   required={true}/>
                    <label  className="profilelabel">Email Address</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="profileinput w-input" maxLength={256} name="email-2"  placeholder="" id="email"  required={true}/>
                    <label  className="profilelabel">Level</label>
                    <select onChange={e=>setLevel(e.target.value)} value={level} name="level" className="profileinput w-select">
                    <option value="">Select Level ....</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                  </select>
                  <input onClick={(e)=>{e.preventDefault();handleSubmit()}} type="submit" value="Save Details" data-wait="Please wait..." className="profilesubmitbutton w-button"/>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </Fragment>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(!session){
    context.res.writeHead(302, { Location: '/login' });
    return context.res.end();
  }

  let  {user}:{user: IUser} = await (await axios.post(`${process.env.URL}/api/users/find`,{ email:session.user['email']})).data
  return {
    props: { session, user }
  }
}
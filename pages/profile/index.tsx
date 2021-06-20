import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Footer from '../../components/Footer'
import CustomHeader from '../../components/Header/CustomHeader'
import { useSession } from "next-auth/client"
// import styles from '../styles/Home.module.css'

export default function ProfilePage() {
  const [session, loading] = useSession()
  if (session) {
    console.log(session.user)
  }

  return (
    <Fragment>
       <CustomHeader/>
        <div className="profile">
          <div className="profilecontent">
            <div className="profileformcontainer">
              <div className="profileform wrapper w-form">
                <form  className="profileform">
                    <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" className="profileimage"/>
                    <label  className="profilelabel">Name</label>
                    <input type="text" className="profileinput w-input" maxLength={256} name="name"   />
                    <label className="profilelabel">Registration Number</label>
                    <input type="text" className="profileinput w-input" maxLength={256} name="regNumber"   required={true}/>
                    <label  className="profilelabel">Email Address</label>
                    <input type="email" className="profileinput w-input" maxLength={256} name="email-2"  placeholder="" id="email"  required={true}/>
                    <label  className="profilelabel">Level</label>
                    <select name="level" className="profileinput w-select">
                    <option value="">Select Level ....</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                  </select>
                  <input type="submit" value="Save Details" data-wait="Please wait..." className="profilesubmitbutton w-button"/>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </Fragment>
  )
}

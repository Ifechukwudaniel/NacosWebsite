import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import LoadingOverlay from '@components/LoadingOverlay'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'

export default function LoginPage() {
  const [ matricNumber , setMatricNumber] = useState<string>("")
  const [ password , setPassword] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { error } = router.query

  const handleMatricNumberChange :React.ChangeEventHandler<HTMLInputElement> = (event)=>{
    setMatricNumber(event.target.value);
}

const handlePasswordChange :React.ChangeEventHandler<HTMLInputElement> = (event)=>{
  setPassword(event.target.value);
}

  const handleSubmit = (e:React.SyntheticEvent) =>{
    e.preventDefault();
    setLoading(true)
    signIn('credentials',{matricNumber, password, callbackUrl: `${window.location.origin}/` })
    .catch(err=>{
      setLoading(false)
    })
  
}
  return (
    <div>
        <div className="signin">
        <Header/>
        {loading && <LoadingOverlay active={loading} text='Connecting to portal ....'/>}
        <div className="backgroundwrapper">
          <div className="imageright signin">
            <motion.div animate={{y:["-100vw","0vw"]}} transition={{duration:2}} className="homeilustration signin ">
              <img src="images/School.png" loading="lazy" width="384" alt="" className="homeilustration img login"/>
              </motion.div>
              <motion.h2  animate={{y:["-100vw","0vw"]}} transition={{duration:1}}   className="signuptext ">
              Welcome to NACOS <br/>B.I.U Chapter
            </motion.h2>
          </div>
          <div className="imageleft signin">
            <div className="homeilustration signin">
              <img src="images/School.png" loading="lazy" width="384" alt="" className="homeilustration img signin mobile"/>
            </div>
            <h2 className="signuptext title">Welcome Back</h2>
            <h5 className="signuptext text">Login to continue</h5>
            {
              error && isMobile && (
                  <div className="w-form-fail">
                    <div>{error}</div>
                </div>
              )
            }
            <div className="signinblock">
              <div className="signform w-form">
                <form id="email-form" name="email-form"  onSubmit={handleSubmit} className="signinform">
                  <div className="signwrapper">
                    <div className="signwrapperdiv">
                      {
                        !isMobile && !error && (
                          <h1 style={{opacity:0.8}}  className="signtext notactive">Welcome back </h1>
                        )
                      }
                      {
                        !isMobile&& error && (
                          <div className="w-form-fail">
                            <div>{error}</div>
                         </div>
                        )
                      }
                      <div className="bottomline notactive"></div>
                    </div>
                  </div>
                      <input value={matricNumber} onChange={handleMatricNumberChange} type="text" className="signinput w-input"  name="matricNumber" placeholder="Matric Number"  required={true}/>
                      <input value={password} onChange={handlePasswordChange} type="password" className="signinput w-input" name="Password" placeholder="Password"  required={true}/>
                      <motion.input whileHover={{scale:1.1}} whileTap= {{scale:0.9}} type="submit" value="Login"  className="signbutton w-button"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

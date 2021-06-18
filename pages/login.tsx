import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import styles from '../styles/Home.module.css'

export default function LoginPage() {
  return (
    <div>
        <div className="signin">
        <Header/>
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
            <div className="signinblock">
              <div className="signform w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="signinform">
                  <div className="signwrapper">
                    <div className="signwrapperdiv">
                      <h1 style={{opacity:0.8}}  className="signtext notactive">Welcome back </h1>
                      <div className="bottomline notactive"></div>
                    </div>
                  </div>
                      <input type="text" className="signinput w-input"  name="matricNumber" placeholder="Matric Number"  required={true}/>
                      <input type="password" className="signinput w-input" name="Password" placeholder="Password"  required={true}/>
                      <motion.input whileHover={{scale:1.1}} whileTap= {{scale:0.9}} type="submit" value="Login" data-wait="Please wait..." className="signbutton w-button"/>
                  <a href="/forgot" className="loginlink forgetpassword">Forgot Password</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
  )
}

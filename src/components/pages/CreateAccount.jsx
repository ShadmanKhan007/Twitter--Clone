import React from 'react'
import styles from './CreateAccount.module.css';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiTwitter } from 'react-icons/si';





export default function CreateAccount() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/signup')
  }

  function getBackToSignin(){
    navigate('/signin')
  }

  return (
    <div>
      <div className={styles.main}>

      <div className={styles.img}>
         <SiTwitter className={styles.Twticon} />
      </div>
       
        <h2 className={styles.heading2}>Join Twitter today</h2>


        <div className={styles.btn}>
        <button className={styles.googleButton}><FcGoogle />Sign up with Google</button>

           <button className={styles.appleButton}> <FaApple  />Sign up with Apple</button>
           <h3 className={styles.heading-3}>or</h3>
           <button className={styles.accountButton} onClick={handleClick}><h4>Create account</h4></button>
        </div>
    
        <p>By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use.</a></p>
        <h4 className={styles.heading4}>Have an account already? <a onClick={getBackToSignin}>Log in</a></h4>
      </div>
    </div>
  )
}
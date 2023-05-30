import React from 'react'
import styles from './CreateAccount.module.css';
import { useNavigate } from 'react-router-dom';



export default function CreateAccount() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/signup')
  }



  return (
    <div>
      <div className={styles.main}>
        <img src='https://img.freepik.com/free-icon/twitter_318-674515.jpg' />
        <h2>Join Twitter today</h2>
        <img />
        <button className={styles.googleButton}><img className={styles.googleLogo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' /> <h4 className={styles.google}>Sign up with Google</h4></button>

        <button className={styles.appleButton}><img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' className={styles.appleLogo} /><h4 className={styles.google}>Sign up with Apple</h4></button>
        <h4>or</h4>
        <button className={styles.accountButton} onClick={handleClick}><h4>Create account</h4></button>
        <p>By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use.</a></p>
        <h4>Have an account already? <a>Log in</a></h4>
      </div>
    </div>
  )
}
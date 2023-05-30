import React from 'react';
import styles from './EmailVarification.module.css'
import TextField from '@mui/material/TextField';
import { SiTwitter } from 'react-icons/si';
// import {RxCross2} from 'react-icons/rx';
import { useState } from 'react';


export default function EmailVarification() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with the entered email (e.g., send password reset link)
        console.log('Email:', email);
        // Reset the email input
        setEmail('');
    };
    return (
        <div className={styles.logoBox}>
            {/* <RxCross2 className={styles.cross}/> */}
            <SiTwitter className={styles.Twticon} />
            <h1>Find your Twitter account</h1>
            <p>Enter the email associated with your account to change your password.</p>


            <form onSubmit={handleSubmit}>
                <TextField id="filled-basic" 
                label="Email" 
                variant="filled" 
                onChange={handleEmailChange}
                style={{ color: "red", backgroundColor: "white", margin: "2rem", width: "23vw" }} />
            </form>
            <button className={styles.input}>Next</button>
        </div>



    )
}
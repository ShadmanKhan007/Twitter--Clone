import React from 'react';
import styles from './EmailVarification.module.css'
import TextField from '@mui/material/TextField';
import { SiTwitter } from 'react-icons/si';
// import {RxCross2} from 'react-icons/rx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function EmailVarification() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem("data"))

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const answer = data.find((value)=>{
            return value.email == email; 
        })

        if(answer == null){
            alert("Invalid Email");
        }
        else{
            if(answer.email == email){
                localStorage.setItem('resetEmail', JSON.stringify(answer))
                navigate('/resetpassword')
            }
    
            else{
                alert('invalid email!')
            }
        }

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
                <button className={styles.input} type='submit'>Next</button>
            </form>
        </div>



    )
}
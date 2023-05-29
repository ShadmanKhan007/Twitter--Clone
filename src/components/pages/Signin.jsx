import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        navigate('/home')
    }

    function handleForgotPassword(){
        navigate('/resetpassword')
    }

    return(
        <>
            <div>
                <h1>Sign in to Twitter</h1>
                <button>Sign in with Google</button>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email: 
                        <input type="email" value={email} onChange={handleEmail}/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePassword} />
                    </label>
                    <br />
                    <button type="submit">Log in</button>
                    <br />
                </form>
                <button onClick={handleForgotPassword}>Forgot Password?</button>
            </div> 
        </>
    )
}

export default Signin;
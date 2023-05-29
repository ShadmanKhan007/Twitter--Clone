import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const ForgotPassword = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')  
  const navigate = useNavigate();

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e){
    setConfirmPassword(e.target.value)
  }

  function handleSubmission(e){
    e.preventDefault();
    if(password === confirmPassword){
        localStorage.setItem("new password", password);
        navigate('/signin');
    }
    else{
        alert('password & confirmed password did not match!')
    }
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmission}>
        <label>
            New Password: 
            <input type='password' value={password} onChange={handlePasswordChange}/>
        </label>
        <br />
        <label>
            Confirm Password:
            <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
        </label>
        <br />
        <button type='submit'>Set New Password</button>
      </form>
    </div>
  )
}

export default ForgotPassword

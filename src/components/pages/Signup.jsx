import React, { useState } from 'react';
import styles from './Signup.module.css';
import { SiTwitter } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmName, setconfirmName] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!emailPattern.test(email)) {
      alert('Invalid email address!');

    }

    if (!passwordPattern.test(password)) {
      alert('Invalid Password!');
    }

    if(JSON.parse(localStorage.getItem('data')) === null){

      const dataArray = [{
        confirmName: confirmName,
        email: email,
        password: password,
      }]

      localStorage.setItem('data', JSON.stringify(dataArray))
      navigate('/signin')
    }
    
    else{
      const data = JSON.parse(localStorage.getItem('data'));
      const answer = data.find((value)=>{
        return value.email == email; 
      })

      if(answer == null){
        const dataArray = {
          confirmName: confirmName,
          email: email,
          password: password,
        }
  
        data.push(dataArray)
  
        localStorage.setItem('data', JSON.stringify(data))
        navigate('/signin')
      }
      else{
        alert('User already exists')
      }
    }

    setEmail('');
    setPassword('');
    setconfirmName('');
  };

  return (
    <div className={styles.logoBox}>
      <div className="Signup_Img">
        <SiTwitter className={styles.Twticon} />
      </div>
      <h2 className="top-heading">Create your account</h2>

      <form onSubmit={handleSignUp}>

        <input
          type="name"
          placeholder="Name"
          value={confirmName}
          onChange={(e) => setconfirmName(e.target.value)}
          required
          className={styles.input}
        />
        <br />

        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <br />

        <input
          type="password"
          value={password}
          minlength="4"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={styles.input}
        />
        <br />

        <button type="submit" className={styles.btn} >Next</button>
      </form>
    </div>
  );
};

export default SignUp;
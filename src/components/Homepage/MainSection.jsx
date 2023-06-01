import styles from './MainSection.module.css'
import React, { useEffect, useState } from 'react'
import {BsImages} from 'react-icons/bs'
import {MdInsertEmoticon} from 'react-icons/md'
import {AiOutlineFileGif} from 'react-icons/ai'
import axios from 'axios'
import { json } from 'react-router-dom'

const TweetCard = ({ tweet }) => {
    return(
        <div className={styles.tweetCard}>
            <h3>{tweet.name}</h3>
            <p>{tweet.user_name}</p>
            <p>{tweet.paragraph}</p>
            <img src={tweet.image} />
        </div>
    )
}

const MainSection = () => {

  const [tweets, setTweets] = useState([]);
  const [text,setText]=useState([]);

  function post(){
    let val=JSON.parse(localStorage.getItem("loginName"));
    console.log(val)
    axios.post("http://localhost:3000/posts",{id: tweets.length+1, name:val.confirmName, user_name:val.email, paragraph: text, image: 'https://picsum.photos/1000/500?q=410'}
    )
   
      axios.get("http://localhost:3000/posts").then((res)=>setTweets(res.data.reverse()))
  }

  function fillText(e){
    setText(e.target.value)
  }

  useEffect(() => {
    const fetchTweets = async () => {
        try{
            const response = await fetch('http://localhost:3000/posts');
            const data = await response.json();
            data.reverse();
            setTweets(data);
        }
        catch(error){
            console.error('Error occured:', error);
        }
    };
    fetchTweets();
  }, tweets);

  return (
    <>
    <div className={styles.main}>
      <h1>Home</h1>
      <div className={styles.whatIsHappening}>
        <img src='https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png' />
        <textarea placeholder='What is happening?' onChange={fillText} />
        <BsImages className={styles.BsImages}/>
        <MdInsertEmoticon className={styles.emoji}/>
        <AiOutlineFileGif className={styles.gif}/>
        <button className={styles.btn} onClick={post}>Tweet</button>
      </div>

      <div className={styles.tweetSection}>
        {
            tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))
        }
      </div>
    </div>
    </>
  )
}

export default MainSection

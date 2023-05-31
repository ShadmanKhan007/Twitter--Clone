import styles from './MainSection.module.css'
import React, { useEffect, useState } from 'react'
import {BsImages} from 'react-icons/bs'
import {MdInsertEmoticon} from 'react-icons/md'
import {AiOutlineFileGif} from 'react-icons/ai'

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

  useEffect(() => {
    const fetchTweets = async () => {
        try{
            const response = await fetch('/tweet.json');
            const data = await response.json();
            setTweets(data);
        }
        catch(error){
            console.error('Error occured:', error);
        }
    };
    fetchTweets();
  }, []);

  return (
    <>
    <div className={styles.main}>
      <h1>Home</h1>
      <div className={styles.whatIsHappening}>
        <img src='https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png' />
        <input placeholder='What is happening?'/>
        <BsImages className={styles.BsImages}/>
        <MdInsertEmoticon className={styles.emoji}/>
        <AiOutlineFileGif className={styles.gif}/>
        <button className={styles.btn}>Tweet</button>
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

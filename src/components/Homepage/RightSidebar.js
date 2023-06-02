import React, { useState } from 'react';
import styles from './RightSidebar.module.css';
import RightSideObj from './RightSideObj';
import { FiSearch } from 'react-icons/fi';
import { TbDots } from 'react-icons/tb';

export default function RightSidebar() {
  const [selectedNews, setSelectedNews] = useState(-1);
  const [tweets, setTweets] = useState(RightSideObj);

  const handleClick = (tweetId) => {
    setSelectedNews(tweetId);
  };

  const handleRemoveTweet = () => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== selectedNews);
    setTweets(updatedTweets);
    setSelectedNews(-1);
   
  };

  return (
    <div className={styles.div}>
    
      <div className={styles.searchbtn} >
        <FiSearch className={styles.icon} />
        <input className={styles.searchHere} placeholder='Search Here' type='text' />
      </div>

      <div className={styles.logoBox}>
        <h2>What's happening</h2>
        <div className={styles.content}>
          {tweets.map((tweet) => (
            <div className={styles.second} key={tweet.id}>
              <h6 style={{ color: 'grey', padding: '1px' }}>{tweet.user}</h6>
              <p>{tweet.content}</p>
              <h5 style={{ color: 'grey', padding: '1px' }}>{tweet.timestamp}</h5>
              <div className={styles.dots} onClick={() => handleClick(tweet.id)}>
                <TbDots />
              </div>
              {selectedNews === tweet.id ? (
                <div className={styles.card} style={{ display: 'block' }}>
                  <div onClick={handleRemoveTweet} className={styles.item}>
                    Not interested in this
                  </div>
                  <div className={styles.item}>This trend is harmful or spammy</div>
                </div>
              ) : (
                <div style={{ display: 'none' }}>
                  <div>Not interested in this</div>
                  <div>This trend is harmful or spammy</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className={styles.btn}>Show more</button>
      </div>
    </div>
  );
}
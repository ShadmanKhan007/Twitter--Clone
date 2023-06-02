import styles from './MainSection.module.css'
import React, { useEffect, useState } from 'react'
import { BsImages } from 'react-icons/bs'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BsFiles } from "react-icons/bs";
import axios from 'axios'
import { json } from 'react-router-dom'
import LeftSideBar from "./LeftSideBar";
import Icons from './Icons';
import RightSidebar from "./RightSidebar";
import Whotofollow from "./Whotofollow";

const TweetCard = ({ tweet }) => {
  return (
    <div className={styles.tweetCard}>

      <div className={styles.tweetCard2}>
        <img src={tweet.image} className={styles.tweetCardImgP} />

        <div className={styles.tweetCard2Detail}>
          <h3 className={styles.tweetCardh3}>{tweet.name}</h3>
          <p className={styles.tweetCardh4}> {tweet.user_name}</p>
          <p className={styles.tweetCardpara}>{tweet.paragraph.slice(0, 20)}</p>
        </div>


      </div>



      <img src={tweet.image} className={styles.tweetCardImg} />
      <Icons />

    </div>
  )
}

const MainSection = () => {

  const [tweets, setTweets] = useState([]);
  const [text, setText] = useState([]);

  function post() {
    let val = JSON.parse(localStorage.getItem("loginName"));
    console.log(val)
    axios.post("http://localhost:3000/posts", { id: tweets.length + 1, name: val.confirmName, user_name: val.email, paragraph: text, image: 'https://picsum.photos/1000/500?q=410' }
    )
   
    axios.get("http://localhost:3000/posts").then((res) => setTweets(res.data.reverse()))
    
  }

  function fillText(e) {
    setText(e.target.value)
  }

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        data.reverse();
        setTweets(data);
      }
      catch (error) {
        console.error('Error occured:', error);
      }
    };
    fetchTweets();
  }, tweets);

  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.itemWrapper}>


          <div className={styles.Leftsidebar}>
            <LeftSideBar />
          </div>



          {/*====================================================== Home Section =========================================*/
/*====================================================== Home Section =========================================*/}

          <div className={styles.main}>

            <div className={styles.home}>

              <div className={styles.homeh1}>
                <h1>Home</h1>
              </div>

              <div className={styles.btn1}>
                <button className={styles.btn}>For you</button>
                <button className={styles.btn}>Following</button>
              </div>


            </div>



            <div className={styles.whatIsHappening}>

              <div className={styles.imputfield}>
                <img src='https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png' height="50px" width="50px" />
                <input type="text" placeholder='What is happening?' onChange={fillText} />
              </div>

              <div className={styles.icons}>

                <div classname={styles.Icon}>
                  <BsImages className={styles.BsImages} />
                  <MdInsertEmoticon className={styles.emoji} />
                  <AiOutlineFileGif className={styles.gif} />
                  <BsFiles className={styles.file} />
                </div>

                <div className={styles.tweetbutton}>
                  <button className={styles.tweetbtn} onClick={post}>Tweet</button>
                </div>

              </div>





            </div>


            <div className='homeLower'>

            </div>
            <div className={styles.tweetSection}>

              {
                tweets.map((tweet) => (
                  <TweetCard key={tweet.id} tweet={tweet} />
                ))

              }
            </div>

          </div>

          <div className={styles.RightSidebar}>
            <RightSidebar />
            <Whotofollow />
          </div>

        </div>
      </div>
    </>
  )
}

export default MainSection

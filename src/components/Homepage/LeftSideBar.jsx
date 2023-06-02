import React from 'react';
import styles from './leftsidebar.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const LeftSideBar = () => {

   

   const Logout = () => {
      window.location.href="/signin"
   }

  return (
    <div className={styles.main}>
      <div className={styles.LeftSideBar}>



      <div className={styles.details}>
          <TwitterIcon className={styles.twitterIcon}/>
      </div>

      <div className={styles.details}>
         <HomeIcon  className={styles.homeIcon}/> <p className={styles.text}>Home</p>
      </div>
        
      <div className={styles.details}>
         <SearchIcon  className={styles.homeIcon}/> <p className={styles.text}>Explore</p>
      </div>

      <div className={styles.details}>
         <NotificationsIcon  className={styles.homeIcon}/> <p className={styles.text}>Notifications</p>
      </div>

      <div className={styles.details}>
         <EmailIcon   className={styles.homeIcon}/> <p className={styles.text}>Message</p>
      </div>

      <div className={styles.details}>
         <BookmarkBorderOutlinedIcon  className={styles.homeIcon}/> <p className={styles.text}>Bookmarks</p>
      </div>

      <div className={styles.details}>
         <ListAltOutlinedIcon  className={styles.homeIcon}/> <p className={styles.text}>Lists</p>
      </div>

      <div className={styles.details}>
         <PersonOutlineOutlinedIcon  className={styles.homeIcon}/> <p className={styles.text}>Profile</p>
      </div>

      <div className={styles.details}>
         <MoreHorizOutlinedIcon  className={styles.homeIcon}/> <p className={styles.text}>More</p>
      </div>

      <button className={styles.btn} >Tweet</button>

      <button onClick={Logout} className={styles.btn2}>Logout</button>

  

    </div>

 </div>



  )
}

export default LeftSideBar;
import React, { useState } from 'react'
import style from './Icons.module.css';
import { BiHeart, BiRepost, BiComment, BiBarChart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";


function Icons() {
    const [heartCount, setHeartCount] = useState(0);
    const [repostCount, setRepostCount] = useState(0);
    const [commentCount, setCommentCount] = useState(237);
    function onHeartClick() {
        setHeartCount(heartCount + 1)
    }
    function onRepostClick() {
        setRepostCount(repostCount + 1);
    }
    function onCommentClick() {
        setCommentCount(commentCount + 1);
    }
    return (
        <div>
            <div className={style.postStastics}>
                <div onClick={onHeartClick} className={style.heart} title='Like'>
                    <BiHeart /> {heartCount}
                </div>
                <div onClick={onRepostClick} className={style.repost} title='Retweet'>
                    <BiRepost /> {repostCount}
                </div>
                <div onClick={onCommentClick} className={style.comment} title='Reply'>
                    <BiComment /> {commentCount}
                </div>
                <div onClick={() => { }} className={style.graph} title='View'>
                    < BiBarChart /> {3.7}K
                </div>
                <div onClick={() => { }} className={style.share} title='Share'>
                    < FiShare /> 
                </div>
            </div>

        </div>
    )
}

export default Icons;
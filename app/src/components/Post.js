import React,{forwardRef, useState} from 'react'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom'
import db from '../firebase';


const Post=forwardRef(({id,avatar,caption,img,vedio,username,timestamp,useremail},ref)=> {

    const router = useHistory();



    const [like,setLike] =useState(false)

    const [edite,setEdite] =useState(false);



    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <div className="postHeader__LeftInfo">
                <img src="/img/IMG_2580.jpg" alt="" />
                <div className="postHeader__details">
                    <h3>{username}</h3>
                    <p>{useremail}</p>
                    <span>{timestamp}</span>
                </div>
                </div>

                <div className="more">
                    <img src="/img/more.svg" />
                </div>
            </div>

            <div className="post__body">
               <p>{caption} </p>

                {img && <img src={img} alt="" />}
                {vedio && <ReactPlayer width="100%" url={vedio} />}

            </div>

            <div className="post__fotter">
                <div className="footer__top">
                <button>
                <i class="far fa-thumbs-up"></i>
                <i class="far fa-comment-dots"></i>
                <span>75</span>
                </button>
                <p className="right">3 Comments</p>
                </div>


                <div className="fotter__bottom">
                    
                    

                  <button><i class="far fa-thumbs-up"></i>
                        <span>Like</span>
                    </button>

                    <button onClick={()=> router.push(`/comment/${id}`)}>
                    <i class="fas fa-comment-alt"></i>
                        <span>Comment</span>
                    </button>

                    <button>
                    <i class="fas fa-share-square"></i>
                        <span>Shere</span>
                    </button>

                    <button>
                    <i class="fas fa-paper-plane"></i>
                        <span>Others</span>
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Post

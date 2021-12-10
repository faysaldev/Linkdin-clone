import React, { useEffect, useState } from 'react'
import './Main.css'
import PostModal from './PostModal';
import Post from './Post';
import { useSelector } from 'react-redux';
import db from '../firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';


function Main() {

    const [post,setPost] = useState([]);

    useEffect(()=>{
        db.collection('post').orderBy('timestamp','desc').onSnapshot((snapshot)=>[
            setPost(snapshot.docs.map((doc)=> ({
                id:doc.id,
                data:doc.data()
            })))
        ])
    },[])

    const user = useSelector((state)=> state.user.user);

    const [spinner,setSpinner] =useState(false)


    console.log(spinner)
    

    const [modalOpen,setModalOpen] =useState(false);

    const OpenMOdal=(e)=>{
        e.preventDefault();
        if(modalOpen){
            setModalOpen(false)
        }else{
            setModalOpen(true)
        }






    }

    


    return (
        <div className="main">
            <div className="cratePost__area">
                <div className="createPost__top">
                        {user.photoURL? <img className="avatar" src={user.photoURL}/>:<img className="avatar" src="/img/IMG_2580.jpg"/>}
                        <div className="postBtn" onClick={OpenMOdal}>Start a post {user.displayName&& user.displayName}</div>
                </div>

                <div className="cratePost___bottom">
                    <div className="createPost__item" onClick={OpenMOdal}>
                        <img src="/img/libray.svg" alt="" />
                        <p>Photo</p>
                    </div>

                    <div className="createPost__item" onClick={OpenMOdal}>
                        <img src="/img/vedio.svg" alt="" />
                        <p>Video</p>
                    </div>

                    <div className="createPost__item" onClick={OpenMOdal}>
                        <img src="/img/photoL.svg" alt="" />
                        <p>Events</p>
                    </div>

                    <div className="createPost__item" onClick={OpenMOdal}>
                        <img src="/img/write.svg" alt="" />
                        <p>Write article</p>
                    </div>
                </div>
            </div>




            <FlipMove className="allpost">
                {post.map(({id,data:{avatar,caption,img,timestamp,username,vedio,useremail}})=> (
                    <Post id={id} key={id} useremail={useremail} username={username} avatar={avatar} vedio={vedio} img={img} caption={caption} timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}/>
                ))}
            </FlipMove>

        {modalOpen&& <PostModal modaOpen={OpenMOdal} />}

        </div>
    )
}

export default Main

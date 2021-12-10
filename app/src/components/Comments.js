import React, { useEffect, useState } from 'react'
import './Comment.css'
import { useParams } from 'react-router-dom'
import db from '../firebase';
import Post from './Post';
import SComment from './SComment'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';


function Comments() {

    const user = useSelector((state)=> state.user.user);

    const {postId} = useParams();
    
    const [mypost,setMyPost] =useState('');

    const [caption,setCaption] = useState('');

    const [comments,setComments] =useState([]);


    useEffect(()=>{
        db.collection('post').doc(postId).onSnapshot((snapshot)=>{
            setMyPost(snapshot.data());
        });

    db.collection('post').doc(postId).collection('comment').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
        setComments(snapshot.docs.map((doc)=>({
            id: doc.id,
            data:doc.data()
        })))
    })
    },[])


    const SendComment=(e)=>{
        e.preventDefault();
        db.collection('post').doc(postId).collection('comment').add({
            text: caption,
            username :user.displayName,
            avatar:user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        setCaption('');
    }

    console.log(mypost)

    return (
        <div className="comment">
            <Post id={postId} useremail={mypost.useremail} username={mypost.username} avatar={mypost.avatar} vedio={mypost.vedio} img={mypost.img} caption={mypost.caption}/>


            <FlipMove className="comment__sections">
                {comments.map(({id,data:{text,username,avatar,timestamp}})=>(
                    <SComment username={username} id={id} key={id} avatar={avatar} text={text} timestamp={new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}

                <form className="comment__input">
                    <input type="text" value={caption} onChange={(e)=> setCaption(e.target.value)} placeholder="Type a comment!" />
                    <button disabled={!caption} type="submit" onClick={SendComment}>Send</button>
                </form>
            </FlipMove>
        </div>
    )
}

export default Comments

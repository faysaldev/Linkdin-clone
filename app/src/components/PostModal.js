import React, { useState } from 'react'
import './PostModal.css'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import { storege } from '../firebase';
import firebase from 'firebase'
import db from '../firebase'
import {setProgress,hideProgress} from '../action'


function PostModal({modaOpen}) {

    const user = useSelector((state)=> state.user.user);
    
    const spinner = useSelector((state)=> state.spiner.spinner);

    const dispatch = useDispatch();


    const [caption,setCaption] =useState('');
    const [img,setImag] =useState(null);

    const [vedioLink,setVedioLink] =useState('');

    const [assetArea,setAssetArea] = useState(true);

    const ImgHandleChange=(e)=>{
        e.preventDefault();
        const Image = e.target.files[0];

        if(Image =="" || Image=== undefined){
            alert(`not an image, file is a${Image.type}`)
        }

        setImag(Image);
    }


    const SendPost=(e)=>{
        e.preventDefault();
        
        if(img){

            const uploadTask =storege.ref(`images/${img.name}`).put(img);
            // progress function...
            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                    const progresss = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    
                },
                (error)=>{
                    console.log(error);
                    alert(error.message);
                },
                ()=>{
                    storege.ref("images").child(img.name).getDownloadURL().then(url=>{
                        db.collection('post').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            img:url,
                            username:user.displayName,
                            avatar:user.photoURL,
                            useremail:user.email,
                            vedio:vedioLink
                        });
                        
                    })
                }
            )

        }else{

            db.collection('post').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                img:img,
                username:user.displayName,
                avatar:user.photoURL,
                useremail:user.email,
                vedio:vedioLink
            });


        }



        setCaption('');
        setImag(null);
        setVedioLink('');
        setAssetArea(true)
        document.querySelector('.closebtn').click();

    }




    return (
        <div className="modal">
           <div className="modal__contant">
               <div className="modal__header">
                   <h2>Create a post</h2>
                   <button className="closebtn" onClick={modaOpen}><img src="/img/close.svg" alt="" /></button>
               </div>

               <div className="modal__post">
                   <div className="modal__userInfo">
                       {user?<img src={user.photoURL} />:<img src="/img/IMG_2580.jpg" />}
                       <span>{user? user.displayName: "Faysal Mridha"}</span>
                   </div>

                <div className="caption__area">
                <textarea placeholder="What do you want to tal about?" autofocus={true} onChange={(e)=> setCaption(e.target.value)}  value={caption}/>

                    {assetArea?
                    (
                    <div className="upload__image">
                    <input type="file" onChange={ImgHandleChange} accept="image/gif,image/jpg,image/png,image/jpeg"
                    style={{display:"none"}}
                    name="file"
                    id="file"
                    />

                    <p><label htmlFor="file">Select an image to shere</label></p>

                    {img&& <img src={URL.createObjectURL(img)} />}



                    </div>
                    )
                    :
                    (<>
                        <input className="vediolink__input" type="text" placeholder="Please enter a Vedio Link?" value={vedioLink} onChange={(e)=> setVedioLink(e.target.value)} />
                    

                        {vedioLink && <ReactPlayer width="100%" url={vedioLink} />}
                        </>
                    )}


                </div>

               </div>

            <div className="posts__button">
               <div className="posts__btn___left">
               <button onClick={()=> {setAssetArea(true); setVedioLink('')}}>
                    <img src="/img/photoL.svg" alt="" />
                </button>

                <button onClick={()=> {setAssetArea(false); setImag(null)}}>
                    <img src="/img/vedio.svg" alt="" />
                </button>
               </div>

               <button className="posts__btn___right">
                    <img src="/img/comment.svg" alt="" />
                    Anyone
                </button>

                <button className="post__button" onClick={SendPost} disabled={!caption}>Posts</button>
            </div>

           </div>
        </div>
    )
}

export default PostModal

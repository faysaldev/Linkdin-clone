import React from 'react'
import { useSelector } from 'react-redux';

function HomeLeft() {

    const user = useSelector((state)=> state.user.user);


    return (
        <div className="home_left">
            <div className="art__card">
                <div className="user__info">
                    <div className="home__leftBg" style={{backgroundImage: "url(/img/card-bg.svg)"}} />
                     <a>
                         <div className="camera__icon" style={{backgroundImage: "url(/img/photo.svg)"}} />
                         {user? <h3>Welcome, {user.displayName}!</h3>:<h3>Welcome, there!</h3>}
                     </a>
                     <a><div className="add__photo">Add a photo</div></a>
                </div>

                <div className="widgets">
                    <a>
                        <div className="widgets__text">
                        <span>Connections</span>
                        <span>Grow your network</span>
                        </div>

                    <img src="/img/widget-icon.svg" alt="" />

                    </a>
                </div>

                <div className="my__item">
                    <img src="/img/item-icon.svg" alt="" />
                    <span>My Items</span>
                </div>

            </div>

        <ul className="details__card">
                <li>
                    <span>Groups</span>
                </li>

                <li>
                    <span>Events</span>
                    <img src="/img/plus-icon.svg" alt="" />
                </li>

                <li>
                    <span>Follows Hashtags</span>
                </li>
                <li>
                    <span>Descover more</span>
                </li>
            </ul>
        </div>
    )
}

export default HomeLeft

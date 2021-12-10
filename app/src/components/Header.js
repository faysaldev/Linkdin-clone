import React from 'react'
import './Header.css'
import {DeleteUser} from '../action'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'

function Header() {

    const dispatch = useDispatch()


    return (
        <div className="header">
            <div className="header__contant">
                <div className="headerLeft__logo">
                    <a href="/"><img src="/img/home-logo.svg"/></a>

                    <div className="search">
                        <img src="/img/search-icon.svg" alt="" />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <nav>
                    <ul>
                        <li className="active">
                            <a>
                            <img src="/img/nav-home.svg" />
                            <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src="/img/nav-network.svg" />
                            <span>Networks</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src="/img/nav-notifications.svg" />
                            <span>Notificaitons</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src="/img/nav-messaging.svg" />
                            <span>Message</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <img src="/img/nav-jobs.svg" />
                            <span>Jobs</span>
                            </a>
                        </li>

                        <li>
                        <div className="user">
                            <a>
                            <img src="/img/user.svg" />
                            <span>Me
                                <img src="/img/down-icon.svg" alt="" />
                            </span>
                            </a>

                            <a className="logout" onClick={()=> dispatch(DeleteUser())}>Login Out</a>
                        </div>
                        </li>

                        
                        <li>
                        <div className="work">
                            <a>
                            <img src="/img/nav-work.svg" />
                            <span>Jobs
                            <img src="/img/down-icon.svg" alt="" />
                            </span>
                            </a>
                        </div>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header

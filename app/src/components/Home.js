import React from 'react'
import { useSelector } from 'react-redux'
import './Home.css'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import Main from './Main'
import { Redirect } from 'react-router-dom'



function Home() {

    const user = useSelector((state)=> state.user.user);


    return (
        <div className="home">
            {user? '': <Redirect to='/login' />}
            <div className="home__top">
                <h5><a>Hiring in a hurry? - </a><p> Find talented pros in record time with Upwork and keep business moving</p></h5>
                
            </div>
        <div className="home__layout">
            <HomeLeft />
            <Main />
            <HomeRight />
        </div>

        </div>
    )
}

export default Home

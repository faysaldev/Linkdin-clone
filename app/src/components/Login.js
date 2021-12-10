import React from 'react'
import './Login.css'
import {auth,provider} from '../firebase'
import { useDispatch ,useSelector} from 'react-redux'
import {User} from '../action';
import { Redirect } from 'react-router-dom'

function Login() {

const user = useSelector((state)=> state.user.user);

const dispatch = useDispatch()

const SignUp =(e)=>{
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then((res)=>{
        dispatch(User(res.user));
    }).catch((error)=> console.log(error))

}



    return (
        <div className="login">
            {user && <Redirect to="/" />}

            <nav>
                <a>
                    <img src="/img/login-logo.svg" alt="" />
                </a>

                <div className="header__right">
                    <a className="join__btn">Join Now</a>
                    <a className="sign__btn" onClick={SignUp}>Sign In</a>
                </div>
            </nav>

            <section className="section">
                <div className="hero">
                    <h1>Welcome to your professtional community</h1>

                    <img src="/img/login-hero.svg" alt="" />
                </div>

                <div className="signup__btn">
                    <button onClick={SignUp}>
                    <img src="/img/google.svg"  />
                    Sign Up With Google
                    </button>
                </div>
            </section>

        </div>
    )
}

export default Login

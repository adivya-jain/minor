import React from 'react'
import "./Home.css"
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaFacebook } from "react-icons/fa"
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const user=1;
    return (
        <div className='Home'>
            <div className="home-left">
                <div className='home-left-logo'>Logo</div>
                <div className='home-left-moto'>Lets Make College BorderLess</div>


                <div className="home-left-social">
                    <IconContext.Provider value={{ color: "white", size: "2.5em" }}>
                        <i className="social-icon"><FaGithub /></i>
                        <i className="social-icon"><FaTwitter /></i>
                        <i className="social-icon"><FaLinkedin /></i>
                        <i className="social-icon"><FaDiscord /></i>
                    </IconContext.Provider>
                </div>
            </div>


            <div className='home-right'>
                <div className='whole-right'>
                    <div className='form-upper-header'>Sign In</div>
                    <div className='form-upper-subheader'>Sign in to your account</div>
                    <div className='form-upper-buttons'>
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <button className='form-upper-buttons-icontext'><FcGoogle /><span className='form-upper-buttons-text'>Sign in with Google</span></button>
                            <button className='form-upper-buttons-icontext'><FaFacebook /><span className='form-upper-buttons-text'>Sign in with Facebook</span></button>
                        </IconContext.Provider>
                    </div>
                    <div className='home-right-form'>
                        <form action="">
                            <label htmlFor="email">Email Address</label><br />
                            <input type="email" placeholder='20...@gmail.com' /><br />


                            <label htmlFor="password">Password</label><br />
                            <input type="password" placeholder='your password' />
                        </form>
                        <a className='forgot-password' href="#">Forgot password?</a>
                    </div>
                    <div className='form-lower'>
                        <button className="signin-button" style={{ backgroundColor: "#4285F4", fontSize: "13px", width: "100%" }}
                            onClick={() => {
                                navigate("/dashboard/profile")
                            }}>

                            SIGN IN
                        </button>
                        <div className='form-lower-text'>
                            Don't Have a account? <a>Register here</a>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default Home

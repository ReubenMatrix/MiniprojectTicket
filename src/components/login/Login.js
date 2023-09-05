import React from 'react'
import './Login.css'
import { FaEnvelope, FaLock, FaEyeSlash } from 'react-icons/fa';


const Login = () => {


  return (
    <div className="container">
    <div className="forms">
        <div className="form login">
            <span className="title">Login</span>

            <form action="#">
                <div className="input-field">
                    <input type="text" placeholder="Enter your email" required/>
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" className="password" placeholder="Enter your password" required/>
                    <FaLock className="icon" />
    <FaEyeSlash className="showHidePw" />
                </div>

                <div className="checkbox-text">
                    <div className="checkbox-content">
                        <input type="checkbox" id="logCheck"/>
                        <label for="logCheck" className="text">Remember me</label>
                    </div>
                    
                    <a href="#" className="text">Forgot password?</a>
                </div>

                <div className="input-field button">
                    <input type="button" value="Login"/>
                </div>
            </form>

            <div className="login-signup">
                <span className="text">Not a user?
                    <a href="#" className="text signup-link">Signup Now</a>
                </span>
            </div>
        </div>

    </div>
</div>

  )
}

export default Login

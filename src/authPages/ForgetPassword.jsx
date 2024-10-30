import React from 'react';
import {Link,useNavigate} from "react-router-dom";

import {getCookie } from '../lib/function';
const ForgetPassword = () => {
    const navigate = useNavigate();
    const isLoggedIn = getCookie('isLoggedIn');
    if (isLoggedIn) {
        navigate("/dashboard");
    }
    return (
        <div className={"main"}>
            <div className={"circle"}></div>
            <div className={"logo"}>
                <img src="/kdjet-logo.png" alt={"Logo Kdjet"} width={150} height={40}/>
            </div>

            <div className={"container"}>
                <h1>Welcome Back</h1>
                <form>
                    <label htmlFor="email">Email:</label>
                    <div className={"customeInput"}>
                        <input type="email" name="email" placeholder="Your Email" autoComplete="off"/>
                        <i className='bx bx-at'></i>
                    </div>
                    <button className={"login"}>Submit</button>
                    <div className={"links"}>
                        <Link to="/register">Don&apos;t have an account?</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;
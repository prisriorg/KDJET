import React, {useEffect, useState} from 'react';
import {Link,useNavigate} from "react-router-dom";

import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import { getURL, setCookie,getCookie, sendPostReq } from '../lib/function';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const navigate = useNavigate();
    const isLoggedIn = getCookie('isLoggedIn');
    if (isLoggedIn) {
        navigate("/dashboard");
    }
    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            const result = await sendPostReq(getURL()+'glogin',
            {
                token: tokenResponse.access_token
            });
              setUser(result);
              console.log(result)
        },
        onError: (error) => setError('Login Failed:')
    });
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    useEffect(() => {
        document.title = 'KDjet | Login';
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!password || !email){
            setError("SomeThing Missing");
        }else{
            getLogin(email,password)
        }
    }
    async function getLogin(email,password){
        try{
            setPending(true);
            const res = await fetch(getURL()+'login',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify({
                    email,password
                })
            });
            const message = await res.json();
                    if (res.ok) {
                        setPending(false);
                        setCookie('isLoggedIn', true, { path: '/' });
                        setCookie('isToken', message.token, { path: '/' });
                        navigate("/dashboard");
                    } else {
                        setPending(false);
                        setError(message.message);
                    }

        }catch (e) {
            setPending(true);
            setError('Anything is Wrong!')
            setPending(false);
        }
        
    }
    return (
        <div className={"main"}>
            <div className={"circle"}></div>
            <div className={"logo"}>
                <img src="/kdjet-logo.png" alt={"Logo Kdjet"} width={150} height={40}/>
            </div>
            <div className={"container"}>
                <h1>Welcome Back</h1>
                <div className={"socialLogin"}>
                    <button onClick={login} className={"google"}>
                        <img src="/google.svg" width={30} height={30} alt={""}/>
                        Login with Google
                    </button>
                </div>
                <div className={"divider"}>
                    <div className={"line"}></div>
                    <p>Or</p>
                    <div className={"line"}></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <div className={"customeInput"}>
                        <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" required/>
                    </div>
                    <label htmlFor="password">Password:</label>
                    <div className={"customeInput"}>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" autoComplete="off" required/>
                    </div>
                    {error && (<div className={"message"}> {error} </div>)}
                    <button className={"login"} disabled={false}>{pending ? "Logging..." : "Login"}</button>
                    <div className={"links"}>
                        <Link to="/forget-password">Forget Password</Link>
                        <Link to="/register">Don&apos;t have an account?</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
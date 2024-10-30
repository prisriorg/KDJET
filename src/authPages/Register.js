import { useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { getURL, setCookie,getCookie } from '../lib/function';

const RegisterForm = () => {
    // const searchParams = useSearchParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const isLoggedIn = getCookie('isLoggedIn');
    if (isLoggedIn) {
        // User is logged in
        navigate("/dashboard");
      }
    function handleClick(token) {
        setCookie('isLoggedIn', true, { path: '/' });
        setCookie('isToken', token, { path: '/' });
        navigate("/dashboard");
    }
    const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");
            setSuccess("");
            if(!matchPassword.match(password)){
                setError("Password Not Match");
            } else if(matchPassword.length !== password.length) {
                setError("Password Not Match");
            } else if(!name || !password || !email){
                setError("Missing Something");
            }else {
                try {
                    setPending(true);
                    const res = await fetch(getURL()+'register', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                          },
                        body: JSON.stringify({
                            name, email, password
                        }),
                    });
                    const message = await res.json();
                    if (res.ok) {
                        setPending(false);
                        const form = e.target;
                        form.reset();
                        setSuccess(message.message);
                        handleClick(message.token);
                    } else {
                        setPending(false);
                        setError(message.message);
                    }
                } catch (e) {
                    setPending(false);
                    setError("Something Wrong."+e);
                }
            }
        }
        
        return (
            <div className={"main"}>
                <div className={"circle"}></div>
                <div className={"logo"}>
                    <img src="/kdjet-logo.png" alt={"Logo Kdjet"} width={150} height={40}/>
                </div>

                <div className={"container"}>
                    <h1>Register on KDjet</h1>
                    <div className={"socialLogin"}>
                        <button onClick={() => {}} className={"google"}>
                            <img src="/google.svg" width={30} alt={""}/>
                            Continue with Google
                        </button>
                    </div>
                    <div className={"divider"}>
                        <div className={"line"}></div>
                        <p>Or</p>
                        <div className={"line"}></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <div className={"customeInput"}>
                            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Your Full Name" autoComplete="off" required/>
                        </div>
                        <label htmlFor="email">Email:</label>
                        <div className={"customeInput"}>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" autoComplete="off" required/>
                        </div>
                        <label htmlFor="password">Password:</label>
                        <div className={"customeInput"}>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" autoComplete="off" required/>
                        </div>
                        <label htmlFor="repassword">Confirm Password:</label>
                        <div className={"customeInput"}>
                            <input type="password" name="password" id="repassword" onChange={(e) => setMatchPassword(e.target.value)} placeholder="Renter Your Password" autoComplete="off"/>
                        </div> 
                        {error && (<div className={"message"}> {error} </div>)}
                        {success && (<div className={"success"}> {success} </div>)}
                        <button className={"login"}
                                disabled={pending}>{pending ? "Registering..." : "Register"}</button>
                        <div className={"links"}>
                            <Link to="/login">I have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
};

export default RegisterForm;
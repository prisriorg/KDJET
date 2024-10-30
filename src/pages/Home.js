import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import videoImage from "../videoimage.png";
import { Button } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import {getCookie } from '../lib/function';
const Home = () => {
    const [name, setName] = useState("navbara");
    const [homea, setHomea] = useState("sticky");
    const [isLogin, setLogin] = useState(true);
    const isLoggedIn = getCookie('isLoggedIn');
    const handleClick = (e) => {
        e.preventDefault();
        if (name === "navbara") {
            setName("navbara navbarActive")
        } else {
            setName("navbara")
        }
    }
    useEffect(()=>{
        setLogin(false);
    },[]);
    return (
        <div>
            <div className={name}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Button
                        type="text"
                        icon={<img src="/kdjet-logo.png" width={150} alt={"KD jet"} />}
                        style={{
                            fontSize: "18px",
                            width: 120,
                            height: 40,
                            alignItems: "center"
                        }}
                    />
                    <div  style={{ display: "flex" }}>
                       {isLoggedIn? <Link to={"/dashboard"}><Button
                            type="text"
                            icon={"Dashboard"}
                            style={{
                                background: "#3143ee",
                                fontSize: "18px",
                                color: "#fff",
                                width: "100%",
                                padding: 5,
                                height: "100%",
                                marginRight: 10,
                                alignItems: "center"
                            }}
                        /></Link>:<Link to={"/register"}><Button
                        type="text"
                        icon={"SignUp"}
                        style={{
                            background: "#3143ee",
                            fontSize: "18px",
                            padding:5,
                            color: "#fff",
                            width: "100%",
                            height: "100%",
                            alignItems: "center"
                        }}
                    /></Link>}
                        <Button
                            type="text"
                            icon={name === "navbara" ? <MenuOutlined /> : <CloseOutlined />}
                            onClick={handleClick}
                            style={{
                                fontSize: "18px",
                                width: 50,
                                height: 40,
                                alignItems: "center"
                            }}
                        />
                    </div>
                </div>
                <div  style={{ padding: 20 }}>
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <Link to="/about">
                        <div>About</div>
                    </Link>
                    <Link to="#">
                        <div>Services</div>
                    </Link>
                    <Link to="#">
                        <div>Contact</div>
                    </Link>
                </div>
            </div>

            <div>
                <div className={"page1 sticky"}>
                    <div className='image1'>
                        <img src={videoImage} />
                    </div>
                    <div className="text1">
                        <h1>
                            Monetize your Video and Turn your traffic into profit.
                        </h1>
                        <p>
                            Join our vibrant community and unleash your creativity with us today!
                        </p>
                        <div className='buttons'>
                            {isLoggedIn?
                            <Link to={"/dashboard"}><Button
                            type="text"
                            icon={"Dashboard"}
                            style={{
                                background: "#3143ee",
                                fontSize: "18px",
                                color: "#fff",
                                width: 120,
                                padding: 5,
                                height: "100%",
                                marginRight: 10,
                                alignItems: "center"
                            }}
                        /></Link>
                            :<><Link to={"/login"}><Button
                                type="text"
                                icon={"Sign in"}
                                style={{
                                    background: "#3143ee",
                                    fontSize: "18px",
                                    color: "#fff",
                                    width: 120,
                                    padding: 5,
                                    height: "100%",
                                    marginRight: 10,
                                    alignItems: "center"
                                }}
                            /></Link>
                            <Link to={"/register"}><Button
                                type="text"
                                icon={"Get Started"}
                                style={{
                                    background: "#3143ee",
                                    fontSize: "18px",
                                    color: "#fff",
                                    width: 120,
                                    padding: 5,
                                    height: "50%",
                                    marginRight: 10,
                                    alignItems: "center"
                                }}
                            /></Link></>}
                        </div>
                        
                    </div>
                    <div className='image2'>
                        <img
                            src={videoImage} />
                    </div>
                    <div style={{ width: "100%", position: "absolute", bottom: 0, left: 0 ,right:0}}>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                            </g>
                        </svg>
                    </div>
                </div>
               
                

                <div style={{
                    width: "100%",
                    background: "#fff"
                }}>
                <section class="features">
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Unlimited Storage</h3>
                            <p>Unleash your creativity without boundaries! Upload an endless array of videos, secure in the knowledge that your content is safely stored on our servers. With KDjet, your content reigns supreme, powered by innovation.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Seamless Streaming</h3>
                            <p>Elevate your viewing experience with KDjet! Enjoy uninterrupted streaming from any device, anywhere, thanks to our unlimited bandwidth. Whether it's high-definition videos or live streams, KDjet delivers top-notch performance, ensuring your entertainment knows no limits.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Lucrative Revenue</h3>
                            <p>Maximize your earnings with KDjet! Our platform boasts industry-leading CPM rates, providing publishers with an impressive average of $1 per thousand views. Partner with KDjet and unlock the potential of your content, turning views into substantial rewards.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Weekly Payouts</h3>
                            <p>Welcome to a world of consistent rewards with KDjet! Enjoy the convenience of hassle-free weekly payouts, a testament to our commitment to your success. With KDjet, your hard work is not just valued, it's celebrated, ensuring you're always on the path to prosperity.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Advanced Analytics</h3>
                            <p>Gain invaluable insights with KDjet's robust analytics! Track your video performance, audience engagement, and revenue growth with precision and clarity. Armed with actionable data, you can optimize your content strategy and elevate your success to new heights.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="feature-card">
                            <h3>Global Reach</h3>
                            <p>Expand your reach with KDjet! Share your content worldwide without limitations, reaching audiences far and wide. With KDjet as your partner, your content becomes a global sensation, transcending borders and captivating audiences across the globe.</p>
                        </div>
                    </div>


                </section>
                
                </div>

                
                <div class="section-divider">
                    <svg id="divider" viewBox="0 0 1600 100" preserveAspectRatio="none" style={{transform: 'rotate(-180deg)'}}>
                        <polygon points="0,100 1600,0 1600,100" style={{fill:"#ffffff"}} />
                    </svg>
                </div>
                <div class="feature-extra">
                <div class="feat">
                    <center>
                        <div class="iconss">
                            <img src="logo.png" alt="Unlimited Storage"/>
                        </div>
                        <div class="infoss">
                            <h3>Unlimited Storage</h3>
                            <p>Experience endless storage space, accessible to all users without any limitations or restrictions.</p>
                        </div>
                    </center>
                </div>

                <div class="feat">
                <center>
                    <div class="iconss">
                        <img src="logo.png" alt="Search Files"/>
                    </div>
                    <div class="infoss">
                        <h3>Search Files</h3>
                        <p>Effortlessly locate any file within our vast cloud storage, streamlining the search process for our users.</p>
                    </div></center>
                </div>
                <div class="feat">
                <center>
                    <div class="iconss">
                        <img src="logo.png" alt="Search Files"/>
                    </div>
                    <div class="infoss">
                        <h3>Search Files</h3>
                        <p>Effortlessly locate any file within our vast cloud storage, streamlining the search process for our users.</p>
                    </div></center>
                </div>
                <div class="feat">
                <center>
                    <div class="iconss">
                        <img src="logo.png" alt="Search Files"/>
                    </div>
                    <div class="infoss">
                        <h3>Search Files</h3>
                        <p>Effortlessly locate any file within our vast cloud storage, streamlining the search process for our users.</p>
                    </div>
                    </center>
                </div>

                </div>
                <div className='homeFooter'>

                    <footer class="footer">
                    
                        <div class="footer-container">
                            <div class="footer-logo">
                                <img src="/kdjet-logo.png" alt="Logo"/>
                            </div>
                            <div class="footer-links">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div class="footer-social">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>&copy; 2024 KDjet. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Home;
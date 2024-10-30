import {Outlet, Link,useNavigate} from "react-router-dom";
import {
    CloseOutlined, ContainerOutlined, DesktopOutlined, MenuOutlined, PieChartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Layout, Button, Avatar, Popover, Drawer} from "antd";
import React, {useEffect, useState} from "react";
import "./MainLayout.css";
import { removeCookie,getCookie,getURL } from "../lib/function";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
];
const { Content,Footer, Header,Sider } = Layout;
const menu = [
    {
        title: "Dashboard",
        path: "dashboard",
        icon: {
            d1:"M23.9,11.437A12,12,0,0,0,0,13a11.878,11.878,0,0,0,3.759,8.712A4.84,4.84,0,0,0,7.113,23H16.88a4.994,4.994,0,0,0,3.509-1.429A11.944,11.944,0,0,0,23.9,11.437Zm-4.909,8.7A3,3,0,0,1,16.88,21H7.113a2.862,2.862,0,0,1-1.981-.741A9.9,9.9,0,0,1,2,13,10.014,10.014,0,0,1,5.338,5.543,9.881,9.881,0,0,1,11.986,3a10.553,10.553,0,0,1,1.174.066,9.994,9.994,0,0,1,5.831,17.076ZM7.807,17.285a1,1,0,0,1-1.4,1.43A8,8,0,0,1,12,5a8.072,8.072,0,0,1,1.143.081,1,1,0,0,1,.847,1.133.989.989,0,0,1-1.133.848,6,6,0,0,0-5.05,10.223Zm12.112-5.428A8.072,8.072,0,0,1,20,13a7.931,7.931,0,0,1-2.408,5.716,1,1,0,0,1-1.4-1.432,5.98,5.98,0,0,0,1.744-5.141,1,1,0,0,1,1.981-.286Zm-5.993.631a2.033,2.033,0,1,1-1.414-1.414l3.781-3.781a1,1,0,1,1,1.414,1.414Z",
            d2: "",
            d3: "",
            d4: "",
            d5: ""

        }
    },
    {
        title: "Stats",
        path: "stats",
        icon: {
            d1: "M23,22H3a1,1,0,0,1-1-1V1A1,1,0,0,0,0,1V21a3,3,0,0,0,3,3H23a1,1,0,0,0,0-2Z",
            d2: "M15,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,15,20Z",
            d3: "M7,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,7,20Z",
            d4: "M19,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,19,20Z",
            d5: "M11,20a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V19A1,1,0,0,0,11,20Z"

        }
    },
    {
        title: "Files",
        path: "files",
        icon: {
            d1: "M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z",
            d2: "",
            d3: "",
            d4: "",
            d5: ""
        }
    },
    {
        title: "Refers",
        path: "refers",
        icon: {
            d1: "m8 0h-4a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h1v2h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0 -4-4zm2 5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2-2v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm10 6h-2a4 4 0 0 0 -4 4v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-5a4 4 0 0 0 -4-4zm2 9a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm-8-16a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 0 1 -2 0v-2a1 1 0 0 0 -1-1h-2a1 1 0 0 1 -1-1zm-2 16a1 1 0 0 1 -1 1h-3a3 3 0 0 1 -3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1zm8 0a1 1 0 1 1 -1-1 1 1 0 0 1 1 1z",
            d2: "",
            d3: "",
            d4: "",
            d5: ""
        }
    },
    {
        title: "API",
        path: "api",
        icon: {
            d1: "M19,1H5A5.006,5.006,0,0,0,0,6v8a5.006,5.006,0,0,0,5,5h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V19h6a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,3,3v7H2V6A3,3,0,0,1,5,3ZM19,17H5a3,3,0,0,1-2.816-2H21.816A3,3,0,0,1,19,17Z"
        }
    },
    {
        title: "Withdraws",
        path: "withdraws",
        icon: {
            d1: "m19 20h-14a5.006 5.006 0 0 1 -5-5v-6a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v6a5.006 5.006 0 0 1 -5 5zm-14-14a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a3 3 0 0 0 -3-3zm7 10a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm-7-2a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-13 5a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z",
            d2: "",
            d3: "",
            d4: "",
            d5: ""
        }
    },
    {
        title: "Settings",
        path: "settings",
        icon: {
            d1: "M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z",
            d2: "M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z",
            d3: "",
            d4: "",
            d5: ""
        }
    }
];


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [theme,setThme]=useState({primaryColor:"#fff",secondaryColor:"#000"});
    const [current, setCurrent] = useState('0');
    const [visible, setVisible] = useState(false);
    const [userData,setUserData]=useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const navigate = useNavigate();
    const isLoggedIn = getCookie('isLoggedIn');
    const istoken = getCookie('isToken');
    if (!isLoggedIn) {
        navigate("/login");
    }
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const handleVisibleChange = (visible) => {
        setCurrent('2');
        setVisible(visible);
    };
   
    useEffect(()=>{
        async function newcall(){
            if(userData!=="{}"){
                try{
                    const res = await fetch(getURL()+'user',
                    {
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json',
                          },
                        body:JSON.stringify({
                            istoken
                        })
                    });
                    const message = await res.json();
                    if (res.ok) {
                        setUserData(message); 
                    } 
                }catch (e) {
                    console.log(e);
                }
            }
        }
        newcall();
    },[istoken]);

    function handleLogout() {
        removeCookie('isLoggedIn');
        sessionStorage.removeItem('isLoggedIn');
        window.location.href="/login";
    }

    const content = (
        <div style={{padding: '10px', textAlign: 'center'}}>
            <Avatar size={40} icon={<UserOutlined/>}/>
            <h3 style={{margin: '10px 0'}}>{userData?userData.name:"loading"}</h3>
            <p>{userData?userData.email:"loading"}</p>
            <p><Button onClick={handleLogout} type="text" danger> Logout
            </Button></p>
        </div>
    );
    return (
        <Layout style={{minHeight: "100vh",}}>
            <Sider
                theme={"light"}
                style={{background: theme.primaryColor}}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) =>{ setOpen(false); setCollapsed(value)}}
                breakpoint={"xs"}
                collapsedWidth={0}
                width={300}
                trigger={null}>
                <Header
                    style={{
                        height: 80,
                        paddingLeft: 20,
                        paddingRight: 10,
                        background:  theme.primaryColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",}}
                        >
                    <img src="/kdjet-logo.png" width={120}/>
                    <Button
                        className={"closeBtn"}
                        type="text"
                        icon={<CloseOutlined/>}
                        onClick={() => {
                            setOpen(!open);
                            setCollapsed(!collapsed)}}
                        style={{
                            fontSize: "16px",
                            width: 40,
                            height: 40,
                            paddingBottom: 20
                        }}
                    />

                </Header>
                <Drawer
                    title={<img src='/kdjet-logo.png' width={120}/>}
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    style={{background: theme.primaryColor}}
                    extra={<Button
                        className={"closeBtn"}
                        type="text"
                        icon={<CloseOutlined style={{color:theme.secondaryColor}}/>}
                        onClick={() => setOpen(!open)}
                        style={{
                            color:theme.secondaryColor,
                            fontSize: "16px",
                            width: 40,
                            height: 40,
                            paddingBottom: 20
                        }}
                    />}
            >

<div className={"sidebar"}>
                    {menu.map((link) => (

                        <Link to={"/"+link.path} key={link.path}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
                                <path fill="currentColor" d={link.icon.d1}/>
                                <path fill="currentColor" d={link.icon.d2}/>
                                <path fill="currentColor" d={link.icon.d3}/>
                                <path fill="currentColor" d={link.icon.d4}/>
                                <path fill="currentColor" d={link.icon.d5}/>
                            </svg>
                            <h3>{link.title}</h3>
                        </Link>
                    ))}
                    <a className="loguot" onClick={options => {}}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"/>
                            <path fill="currentColor"
                                d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"/>
                        </svg>

                        <h3>Logout</h3>
                    </a>
                </div>

                </Drawer>


                
<div className={"sidebar"}>
                    {menu.map((link) => (

                        <Link to={"/"+link.path} key={link.path}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
                                <path fill="currentColor" d={link.icon.d1}/>
                                <path fill="currentColor" d={link.icon.d2}/>
                                <path fill="currentColor" d={link.icon.d3}/>
                                <path fill="currentColor" d={link.icon.d4}/>
                                <path fill="currentColor" d={link.icon.d5}/>
                            </svg>
                            <h3>{link.title}</h3>
                        </Link>
                    ))}
                    <a className="loguot" onClick={options => {}}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"/>
                            <path fill="currentColor"
                                d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"/>
                        </svg>

                        <h3>Logout</h3>
                    </a>
                </div>
            </Sider>
            <Layout>
                <div
                    style={{
                        padding: 10,
                        background:  theme.primaryColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        className={"drawerBtn"}
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            // boxShadow:theme.secondaryColor+' 3px 3px 6px 0px inset, '+theme.secondaryColor+' -3px -3px 6px 1px inset',
                            color:theme.secondaryColor,
                            fontSize: "16px",
                            width: 40,
                            height: 40,
                        }}
                    />
                    <Button
                        className={"drawerCloseBtn"}
                        type="text"
                        onClick={showDrawer}
                        icon={<MenuOutlined />}
                        style={{
                            fontSize: "16px",
                            width: 40,
                            height: 40,
                        }}
                    />
                    {/*<div>*/}
                    {/*<Switch*/}
                    {/*    style={{marginLeft:10,marginRight:10}}*/}
                    {/*    checked={theme2 === 'dark'}*/}
                    {/*    onChange={changeTheme}*/}
                    {/*    checkedChildren="Dark"*/}
                    {/*    unCheckedChildren="Light"*/}
                    {/*/>*/}
                    <Popover
                        content={content}
                        trigger="click"
                        visible={visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        <Avatar size="default" icon={<UserOutlined/>} style={{cursor: 'pointer', padding: 0}}/>
                    </Popover>
                    {/*</div>*/}
                </div>
                <Content >
                    <Outlet/>
                </Content>
                <Footer
                    style={{
                        boxShadow:'rgba(255, 255, 255, 0.5) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                        color:theme.secondaryColor,
                        textAlign: 'center',
                        background: theme.primaryColor
                    }}
                >
                KDjet ©{new Date().getFullYear()} Created by <Link to={"https://prisri.org"}>PRISRI</Link>
                </Footer>
            </Layout>
        </Layout>
    );




};

export default MainLayout;
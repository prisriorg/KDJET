"use client"
import React, {useEffect, useState} from 'react';
import styles from "@/components/User/UserDashboard/UserDashboard.module.css";
import { Collapse, Input, QRCode, Space,Card, Statistic,message,Tooltip} from "antd";
import {useSession} from "next-auth/react";
import Search from 'antd/es/input/Search';
const { Meta } = Card;
import { LinkOutlined,AudioOutlined, UserAddOutlined ,MoneyCollectOutlined} from '@ant-design/icons';
const UserRefers = () => {
    const {data} = useSession();
    const [refer,setRefer] = useState({
        todayRefers:0,
        todayIncome:0,
        totalRefers:0,
        totalIncome:0,
    });
    const [messageApi, contextHolder] = message.useMessage();
    const copyText = ()=>{
        navigator.clipboard.writeText('Copy this text to clipboard');
        messageApi.open({
            type: "success",
            content: "Link Copied!",
          });
    };
    const text ="https://kdjet.com";
    const [loading, setLoading] = useState(true);
    const getData = async (email,token) => {
        setLoading(true);
        const res = await fetch('/api/data/refers', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                email, token
            })
        });
        if (res.ok) {
            const aaa = await res.json();
            if (aaa) {
                setRefer(aaa.refer)
                setLoading(false);
            }
        }
    }
    useEffect(() => {
        getData(data?.user?.email, data?.user?.id);
    }, [data]);
    const st = [
        {
            title:"Today Refers",
            value: refer.todayRefers,
            precision:0
        },
        {
            title:"Today Income",
            value: refer.todayIncome,
            precision:2
        },
        {
            title:"Total Refers",
            value: refer.totalRefers,
            precision:0
        },
        {
            title:"Total Income",
            value: refer.totalIncome,
            precision:2
        }
    ];
    
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

    return (
        <>
            <div>
            {contextHolder}
                <ul className={styles.insights}>

                    {st.map((value,index)=>(
                        <li key={index}>
                            <Statistic
                                title={value.title}
                                value={loading ? "Loading" : value.value}
                                prefix={value.precision==0?<UserAddOutlined />:<MoneyCollectOutlined />}
                                precision={value.precision}
                            />
                        </li>))}

                </ul>
            </div>

            <div className={styles.dashboard}>
                <div className={styles.container}>
                <Card
    hoverable
    style={{ width: 300 }}
  ><Space direction="vertical" align="center">
                            <QRCode value={text || '-'} icon={"/logo.png"} />
                            <div className={styles.searchContainer}>
                            <input type="text" className={styles.searchBox} disabled value={text}/>
                            <Tooltip title="Copy Link" color={"black"} >
                            <button className={styles.searchButton} onClick={copyText} ><LinkOutlined /></button>
                            </Tooltip>
                            </div>
                        </Space>
  </Card>
  
                        
                </div>
            </div>
            <div className={styles.dashboard}>
                <div className={styles.container}>
                <Collapse accordion items={[
                    {
    key: '1',
    label: 'Level 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Level 2',
    children: <p>{text}</p>,
  },
                ]}/>
                </div>
            </div>

        </>
    );
};

export default UserRefers;
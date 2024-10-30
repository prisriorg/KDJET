import React, {useState} from 'react';
import './UserDashboard.css';
import {format} from "../../lib/function";

import { Badge, Card, Space } from 'antd';
const UserDashboard = () => {
    const [views,setViews] =useState({
        todayViews:0,
        todayIncome:0,
        avgCpm:0,
        weeklyIncome:0,
    });
    const [total,setTotal]=useState({});
    const [loading, setLoading] = useState(true);
    const [dataset,setDataset] =useState([]);
    const [currency,setCurrency] =useState("$");
    // let ref;
    async function aa(email,token){
        setLoading(true)
        const res = await fetch('/api/data/dashboard', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                email,token
            })
        });
        if(res.ok){
            const aaa = await res.json();
            if(aaa){
                setDataset(aaa.data);
                setViews(aaa.views);
                setTotal(aaa.total);
                setLoading(false)
            }
        }
    }
    const dt = [
        {
            icon: {
                d1:"M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z",
                d2:"M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z",
            },
            name:"Today Views",
            value: format(views.todayViews)
        },
        {
            icon:{
                d1:"M13.932,4A3.071,3.071,0,0,1,17,7.068a1,1,0,0,0,2,0V7c0-.019,0-.036,0-.055A5.073,5.073,0,0,0,13.932,2H13V1a1,1,0,0,0-2,0V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932a1,1,0,0,0-2,0V17c0,.019,0,.036,0,.055A5.073,5.073,0,0,0,10.068,22H11v1a1,1,0,0,0,2,0V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4Zm.97,10.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"
            },
            name:"Today Income",
            value: currency + format(views.todayIncome)
        },
        {
            icon:{
                d1:"M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z",
                d2:"M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z",
            },
            name:"Average CPM",
            value: currency + format(views.avgCpm)
        },
        {
            icon:{
                d1:"M13.932,4A3.071,3.071,0,0,1,17,7.068a1,1,0,0,0,2,0V7c0-.019,0-.036,0-.055A5.073,5.073,0,0,0,13.932,2H13V1a1,1,0,0,0-2,0V2h-.932a5.068,5.068,0,0,0-1.6,9.875L11,12.72V20h-.932A3.071,3.071,0,0,1,7,16.932a1,1,0,0,0-2,0V17c0,.019,0,.036,0,.055A5.073,5.073,0,0,0,10.068,22H11v1a1,1,0,0,0,2,0V22h.932a5.068,5.068,0,0,0,1.6-9.875L13,11.28V4Zm.97,10.021A3.068,3.068,0,0,1,13.932,20H13V13.387ZM11,10.613,9.1,9.979A3.068,3.068,0,0,1,10.068,4H11Z"
            },
            name:"Weekly Income",
            value: currency + format(views.weeklyIncome)
        }
    ];
    return (
        <>
         <div>
                <ul className={"insights"}>
                    {dt.map((d) => (
                        <li key={d.name}>
                            <i className={"bx"}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" height={50}
                                     width={40}>
                                    <path fill="currentColor" d={d.icon.d1}/>
                                    <path fill="currentColor" d={d.icon.d2}/>
                                </svg>
                            </i>
                            <span className="info">
                            <h3>{loading?"Loading":d.value === undefined ?"null":d.value}</h3>
                            <p>{d.name}</p>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"dashboard"}>
                <div style={{padding:20}}>
                    <div className={"header"}>
                        Recent Updates
                    </div>
                    <div className='body'>
                    <Badge.Ribbon text="New" >
                        <Card hoverable>

                        and raises the spyglass.
                        </Card>
                    </Badge.Ribbon>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"header"}>
                        Reports
                    </div>
                    <div className={"body"}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Views</th>
                                    <th>CPM</th>
                                    <th>Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                            {dataset.length > 0 ? dataset.map((value, index) =>
                                (<tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.view}</td>
                                        <td>{value.cpm}</td>
                                        <td>{value.income}</td>
                                    </tr>
                                )) : <tr>
                                    <td colSpan={4}>Loading</td>
                                </tr>}
                            {dataset.length>0?<tr>
                                <th>Total</th>
                                <th>{total.tViews}</th>
                                <th>{total.tCpm}</th>
                                <th>{total.tEarnings}</th>
                            </tr>:<></>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};
export default UserDashboard;
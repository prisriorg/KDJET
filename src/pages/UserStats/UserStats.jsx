import React, {useEffect, useState} from 'react';
import {DatePicker, Space, Table, Pagination} from 'antd';
import moment from "moment";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const UserStats = () => {
    const [dataset,setData]=useState([]);
    const [total,setTotal]=useState({});
    const [perPage, setPerPage] = useState(10);
    const [loading, setLoading] = useState(true);
    const [all, setAll] = useState(true);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    async function getStats(email,token,startDate,endDate){
        setLoading(true)
        const res = await fetch('/api/data/stats', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                email,token,startDate,endDate
            })
        });
        if(res.ok){
            const aaa = await res.json();
            if(aaa){
                setData(aaa.data);
                setTotal(aaa.total);
                setLoading(false);
            }
        }
    }

    const onPanelChange=(value, dateString)=>{
        if(dateString.length>0){
            let ss;
            if(dateString[0]===dateString[1]){
                ss = moment(new Date(value[1])).add(1,'days').toDate();
            }else {
                ss=new Date(value[1]);
            }
            // getStats(data?.user?.email, data?.user?.id,new Date(value[0]),ss);
        }

    }
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(dataset.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }
    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return dataset.slice((current - 1) * pageSize, current * pageSize);
    };
    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }
    return (
        <>
            <div style={{width:"94%",margin:20,backgroundColor:'white',borderRadius:10,padding:15,boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                <div className={"header"}>
                    Analytics
                </div>
                <div className={"body"}>
                    <Space direction="vertical" size={12}>
                        <RangePicker allowEmpty={[false,false]} defaultValue={[dayjs(), dayjs()]} presets={[
                            {
                                label: 'Last 7 Days',
                                value: [dayjs().add(-7, 'd'), dayjs()],
                            },
                            {
                                label: 'Last 14 Days',
                                value: [dayjs().add(-14, 'd'), dayjs()],
                            },
                            {
                                label: 'Last 30 Days',
                                value: [dayjs().add(-30, 'd'), dayjs()],
                            },
                            {
                                label: 'Last 90 Days',
                                value: [dayjs().add(-90, 'd'), dayjs()],
                            },
                        ]} onChange={onPanelChange}/>
                    </Space>
                    <div style={{margin:29}}>

                    </div>
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
                        {loading ? <tr>
                                <td colSpan="4">Loading</td>
                            </tr> :
                            dataset.length > 0 ? getData(current, size).map((value, index) =>
                                (<tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.view} {/*{.split(".").join(" ")}*/}  </td>
                                        <td>{value.cpm}</td>
                                        <td>{value.income}</td>
                                    </tr>
                                )
                            ) : <tr>
                                <td colSpan="4">No Data Found</td>
                            </tr>}
                        {dataset.length>0?<tr>
                            <th>Total</th>
                            <th>{total.tViews}</th>
                            <th>{total.tCpm}</th>
                            <th>{total.tEarnings}</th>
                        </tr>:<></>}
                        </tbody>
                    </table>
                    <div style={{margin: 30}}>
                        <center>
                            <Pagination
                                onChange={PaginationChange}
                                onShowSizeChange={PerPageChange}
                                total={dataset.length}
                                responsive={true}
                                current={current}
                                showSizeChanger
                                pageSize={size}
                                showQuickJumper
                                showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                // onChange={onChange}
                                // showTotal={(total) => `Total ${total} items`}
                            />
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserStats;
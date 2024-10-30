"use client";
import React, { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, LinkOutlined } from "@ant-design/icons";
import styles from "@/components/User/UserStats/UserState.module.css";
import { Button, DatePicker, message, Space, Table, Tooltip } from "antd";

import dayjs from "dayjs";
import { redirect } from "next/navigation";

const { RangePicker } = DatePicker;
const data = [];
const onPanelChange = () => {};

for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    id: i,
    name: "John Brown.mp4",
    view: Number(`${i}2`),
    amount: ` ${i}`,
  });
}
const UserFiles = () => {
  const [dataset, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Link Copied!",
    });
  };
  const items = [
    {
      key: "1",
      label: "Action 1",
    },
    {
      key: "2",
      label: "Action 2",
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "Views",
      dataIndex: "view",
      key: "view",
      sorter: (a, b) => a.view - b.view,
    },
    {
      title: "Earnings",
      key: "amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Action",
      key: "action",
      render: (value) => (
        <Space size="middle">
          <Tooltip title="Copy Link" color={"blue"} >
            <Button
              onClick={success}
              type="primary"
              shape="circle"
              icon={<LinkOutlined />}
            />
          </Tooltip>
          <Tooltip title="Edit" color={"blue"} >
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Tooltip>
          <Tooltip title="Delete" color={"red"} >
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              danger
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  function uploadBtn() {
    redirect("jgfvbnjuytf");
  }
  useEffect(() => {
    setData(data);
    console.log(data);
    setLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      {contextHolder}
      <div className={styles.header}>Uploads</div>
      <div className={styles.header}>
        <div className={styles.section1}>
          <Space direction="vertical" size={12}>
            <RangePicker
              allowEmpty={[false, false]}
              defaultValue={[dayjs(), dayjs()]}
              presets={[
                {
                  label: "Last 7 Days",
                  value: [dayjs().add(-7, "d"), dayjs()],
                },
                {
                  label: "Last 14 Days",
                  value: [dayjs().add(-14, "d"), dayjs()],
                },
                {
                  label: "Last 30 Days",
                  value: [dayjs().add(-30, "d"), dayjs()],
                },
                {
                  label: "Last 90 Days",
                  value: [dayjs().add(-90, "d"), dayjs()],
                },
              ]}
              onChange={onPanelChange}
            />
          </Space>
          <Button style={{ marginLeft: "10px" }} type="primary" shape="round">
            Upload
          </Button>
        </div>
        <div style={{ margin: 29 }}></div>

        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 500,
          }}
          pagination={{
            position: ["none", "bottomCenter"],
            showQuickJumper: true,
          }}
        />
      </div>
    </div>
  );
};
export default UserFiles;

import React from 'react';
import {Button, Result} from "antd";
import Link from "next/link";

const User404 = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to={"/user/dashboard"}> <Button type="primary">Back Home</Button></Link>}
            />
        </div>
    );
};

export default User404;
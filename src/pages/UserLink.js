import React from 'react';
import {Breadcrumb} from "antd";

const UserLink = ({name}) => {
    return (
        <div style={{margin: '0px 10px' }}>
            <Breadcrumb
                items={[
                    {
                        title: 'User',
                    },
                    {
                        title: name[0].toUpperCase() + name.slice(1),
                    },
                ]}
            />
        </div>
    );
};

export default UserLink;
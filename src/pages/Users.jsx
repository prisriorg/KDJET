import React from 'react';
import UserDashboard from "./UserDashboard/UserDashboard";
import UserStats from "./UserStats/UserStats";
import UserFiles from "./UserFiles/UserFiles";
import UserRefers from "./UserRefers/UserRefers";
import UserApi from "./UserApi/UserApi";
import UserPassword from "./UserPassword/UserPassword";
import UserWithdraws from "./UserWithdraws/UserWithdraws";
import UserSettings from "./UserSettings/UserSettings";
import User404 from "./User404/User404";
import UserLink from "./UserLink";
import UserFooter from "./UserFooter/UserFooter";

const User = ({dashboard}) => {
    function user() {
        switch (dashboard) {
            case "dashboard":
                return <UserDashboard/>
            case "stats":
                return <UserStats/>
            case "files":
                return <UserFiles/>
            case "reports":
                return <UserDashboard/>
            case "refers":
                return <UserRefers/>
            case "api":
                return <UserApi/>
            case "change-password":
                return <UserPassword/>
            case "withdraws":
                return <UserWithdraws/>
            case "settings":
                return <UserSettings/>
            default :
                return <User404/>
        }
    }
    return (
        <>
            <div className={'dash'}>
                <UserLink name={dashboard}/>
                {user()}
                <UserFooter/>
            </div>
        </>
    );
};

export default User;
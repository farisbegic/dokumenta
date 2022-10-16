import React, {useEffect, useState} from 'react';
import ProfileInformation from "../../components/Profile/ProfileInformation";
import RequestTable from "../../components/Profile/RequestTable";
import userService from "../../services/user";

export default function Profile() {
    const [user, setUser] = useState('');

    useEffect(() => {
        userService.getUserInformation().then((response) => {
            setUser(response.data);
            console.log("hellO",user);
        });
    }, []);
    return (
        <>
            <ProfileInformation user={user}/>
            <div className="wrapper">
                <RequestTable/>
            </div>
        </>
    )
}
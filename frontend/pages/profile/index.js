import React, {useEffect, useState} from 'react';
import ProfileInformation from "../../components/Profile/ProfileInformation";
import RequestTable from "../../components/Profile/RequestTable";
import userService from "../../services/user";
import documentService from "../../services/document";

export default function Profile() {
    const [user, setUser] = useState('');
    const [requests, setRequests] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchData () {
            const user = await userService.getUserInformation();
            setUser(user.data);
            const requests = await documentService.getUserRequests();
            setRequests(requests.data);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <>
            { !loading && (
                <>
                    <ProfileInformation user={user}/>
                    <div className="wrapper">
                        <RequestTable requests={requests}/>
                    </div>
                </>
            )}
        </>
    )
}
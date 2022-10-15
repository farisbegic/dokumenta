import React from 'react';
import ProfileInformation from "../../components/Profile/ProfileInformation";
import RequestTable from "../../components/Profile/RequestTable";
import Button from "../../components/common/Button";

export default function Profile() {
    return (
        <>
            <ProfileInformation />
            <div className="wrapper">
                    <RequestTable />
            </div>
        </>
    )
}
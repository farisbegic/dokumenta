import React from 'react';
import Button from "../common/Button";
import {FaCog} from "react-icons/fa";

const ProfileInformation = ({ user }) => {
    return (
        <div className="profile-information-image">
            <div className="profile-information-wrap">
                <div className="wrapper profile-information">
                    <div>
                        <p className="paragraph">Dobrodošli,</p>
                        <h1 className="heading">{`${user.name} ${user.surname}`}</h1>
                        <h4 className="paragraph">{user.email}</h4>
                    </div>
                    <Button link="/profile/settings" name={<FaCog size="24"/>} size="sm-secondary"/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
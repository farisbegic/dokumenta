import React from 'react';
import Button from "../common/Button";
import {FaCog} from "react-icons/fa";

const ProfileInformation = () => {
    return (
        <div className="profile-information-image">
            <div className="profile-information-wrap">
                <div className="wrapper profile-information">
                    <div>
                        <p className="paragraph">Dobrodošli,</p>
                        <h1 className="heading">Irfan Parić</h1>
                    </div>
                    <Button link="/" name={<FaCog size="24"/>} size="sm-secondary"/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
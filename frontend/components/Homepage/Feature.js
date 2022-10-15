import React from 'react';
import Card from "../common/Card";
import {FaCog} from "react-icons/fa"

const Feature = () => {
    return (
        <div className="feature">
            <h1 className="subheading">Funkcionalnosti</h1>
            <div className="featurecard">
                <Card text="feature1" icon={<FaCog size="23"/>}/>
                <Card text="feature2"/>
                <Card text="feature3"/>
                <Card text="feature4"/>
            </div>
        </div>
    );
};

export default Feature;
import React from 'react';
import Card from "../common/Card";
import {BiTimer} from "react-icons/bi";
import {HiOutlineDocument} from "react-icons/hi";
import {HiOutlineCursorClick} from "react-icons/hi";
import {GiEcology} from "react-icons/gi";

const Feature = () => {
    return (
        <div className="feature">
            <h1 className="heading">Funkcionalnosti</h1>
            <div className="featurecard">
                <Card text="Ušteda vremena" icon={<BiTimer size="120"/>}/>
                <Card text="Zahtjev dokumenata" icon={<HiOutlineDocument size="120"/>}/>
                <Card text="Fleksibilnost" icon={<HiOutlineCursorClick size="120"/>}/>
                <Card text="Eko zaštita" icon={<GiEcology size="120"/>}/>
            </div>
        </div>
    );
};

export default Feature;
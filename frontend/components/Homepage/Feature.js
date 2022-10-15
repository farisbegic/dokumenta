import React from 'react';
import Card from "../common/Card";
import {BiTimer} from "react-icons/bi";
import {HiOutlineDocument} from "react-icons/hi";
import {HiOutlineCursorClick} from "react-icons/hi";
import {GiEcology} from "react-icons/gi";

const Feature = () => {
    return (
        <div className="feature">
            <h1 className="subheading">Funkcionalnosti</h1>
            <div className="featurecard">
                <Card text="Ušteda vremena" icon={<BiTimer size="80"/>}/>
                <Card text="Zahtjev dokumenata" icon={<HiOutlineDocument size="80"/>}/>
                <Card text="Fleksibilnost" icon={<HiOutlineCursorClick size={"80"}/>}/>
                <Card text="Eko zaštita" icon={<GiEcology size={"80"}/>}/>
            </div>
        </div>
    );
};

export default Feature;
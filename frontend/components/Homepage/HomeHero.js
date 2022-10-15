import React from 'react';
import Button from "../common/Button";

const HomeHero = () => {
    return (
        <div className="home-hero-wrap">
            <div className="home-hero">
                <div className="home-hero-msg">
                    <h1 className="heading">Ne želite čekati u redu?</h1>
                    <h1 className="paragraph">Zatražite željene dokumente odmah</h1>
                </div>
                <div className="home-hero-btn">
                    <Button link="register" name="Prijavi se" size="md-secondary" />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
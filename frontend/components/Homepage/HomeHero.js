import React from 'react';
import Button from "../common/Button";
import routes from "../../constants/routes";

const HomeHero = () => {
    return (
        <div className="home-hero-wrap">
            <div className="home-hero">
                <div className="home-hero-msg">
                    <h1 className="heading">Ne želite čekati u redu?</h1>
                    <h2 className="paragraph">Zatražite željene dokumente odmah i izbjegnite višesatne gužve na šalterima u vašoj općini</h2>
                </div>
                <div className="home-hero-btn">
                    <Button link={routes.register.link} name="Prijavi se" size="md-secondary" />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
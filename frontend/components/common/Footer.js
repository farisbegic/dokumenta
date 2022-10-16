import React from 'react';
import routes from "../../constants/routes";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer">
            <Link href={routes.home.link} passHref>
                <a className="foot-logo">Dokumenta</a>
            </Link>
            <p className="paragraph">©2022 Dokumenta. All rights reserved</p>
        </div>
    );
};

export default Footer;
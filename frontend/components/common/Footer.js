import React from 'react';
import routes from "../../constants/routes";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer">
            <Link href={routes.home} passHref>
                <a className="foot-logo">Dokumenta</a>
            </Link>
        </div>
    );
};

export default Footer;
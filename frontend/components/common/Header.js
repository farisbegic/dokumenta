import React, {useContext, useState} from 'react';
import Link from 'next/link';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import routes from '../../constants/routes'
import {primaryColor} from '../../styles/colors.module.scss'
import {useEffect} from "react";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {useRouter} from "next/router";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [sticky, setSticky] = useState("");
    const { accessToken, logout } = useContext(AuthenticationContext);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const handleLogout = () => {
        logout();
        router.push(routes.home.link);
    }

    const classes = `header-section d-xl-block ${sticky}`;

    return (
        <header className={classes}>
            <div className="wrapper head-wrap">
                <Link href={routes.home.link} passHref>
                    <a className="nav-logo">Dokumenta</a>
                </Link>

                <nav className={click ? "active" : ""}>
                    <Link href={routes.home.link} passHref>
                        <a className="nav-item" onClick={handleClick}>{routes.home.name}</a>
                    </Link>
                    { accessToken ? (
                        <>
                            <Link href={routes.profile.link} passHref>
                                <a className="nav-item" onClick={handleClick}>{routes.profile.name} </a>
                            </Link>
                            <p className="nav-item" onClick={handleLogout}>{routes.logout.name} </p>
                        </>
                    ) : (
                        <>
                            <Link href={routes.login.link} passHref>
                                <a className="nav-item" onClick={handleClick}>{routes.login.name}</a>
                            </Link>
                            <Link href={routes.register.link} passHref>
                                <a className="nav-item" onClick={handleClick}>{routes.register.name} </a>
                            </Link>
                        </>
                    )}
                </nav>

                <div className="nav-icon" onClick={handleClick}>
                    {!click ? (<IoMdMenu size="25px" color={primaryColor}/>) : (<IoMdClose size="25px" color={primaryColor}/>)}
                </div>
            </div>
        </header>
    );
};

export default Header;
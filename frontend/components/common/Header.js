import React, {useState} from 'react';
import Link from 'next/link';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import routes from '../../constants/routes'
import {primaryColor} from '../../styles/colors.module.scss'

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="wrapper">
            <header>
                <Link href={routes.home} passHref>
                    <a className="nav-logo">Dokumenta</a>
                </Link>

                <nav className={click ? "active" : ""}>
                    <Link href={routes.home.link} passHref>
                        <a className="nav-item" onClick={handleClick}>{routes.home.name}</a>
                    </Link>
                    <Link href={routes.login.link} passHref>
                        <a className="nav-item" onClick={handleClick}>{routes.login.name}</a>
                    </Link>
                    <Link href={routes.register.link} passHref>
                        <a className="nav-item" onClick={handleClick}>{routes.register.name} </a>
                    </Link>
                </nav>

                <div className="nav-icon" onClick={handleClick}>
                    {!click ? (<IoMdMenu size="25px" color={primaryColor}/>) : (<IoMdClose size="25px" color={primaryColor}/>)}
                </div>
            </header>
        </div>
    );
};

export default Header;
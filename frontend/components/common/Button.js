import React from 'react'
import Link from 'next/link'


const Button = ({ name, link, size }) => {
    return (
        <Link href={link}>
            <a className={`button ${size}`}>{name}</a>
        </Link>
    );
};

export default Button;
import React from 'react'

const FunctionalButton = ({ name, size }) => {
    return (
            <button className={`button ${size}`}>{name}</button>
    );
};

export default FunctionalButton;
import React from 'react'

const FunctionalButton = ({ name, size }) => {
    return (
            <button className={`button ${size}`} type="submit">{name}</button>
    );
};

export default FunctionalButton;
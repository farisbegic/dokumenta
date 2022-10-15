import React from 'react';

const Card = ({icon, text}) => {
    return (
        <div className="card">
            {icon && icon}
            <p className="paragraph">{text}</p>
        </div>
    );
};

export default Card;
import React from 'react';

const Card = ({icon, text}) => {
    return (
        <div className="card">
            {icon && icon}
            <p className="subheading" style={{textAlign: 'center'}}>{text}</p>
        </div>
    );
};

export default Card;
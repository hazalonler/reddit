import React from 'react';
import './Card.css';

const Card = (props) => {
  const {className, children} = props;
  return <div className={`card ${className}`}>{children}</div>;

};

export default Card;

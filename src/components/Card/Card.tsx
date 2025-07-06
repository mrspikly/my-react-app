import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={'product'}>
      <img 
        src={imageUrl} 
        alt={title} 
        className={'fhoto1'} 
      />
      <div className={'price'}>
        <h2>{title}</h2>
        <h5>{description}</h5>
        <a href="#">Посмотреть ещё</a>
      </div>
    </div>
  );
};

export default Card;
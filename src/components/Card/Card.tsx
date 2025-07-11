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
        className={'photo1'} 
      />
      <div className={'card-content'}>
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Card;
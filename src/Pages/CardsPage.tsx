import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/Card/CardList';

const CardsPage: React.FC = () => {
  const [] = useSearchParams();

  return (
    <div className="cards-page">
      <div className="container">
        <h1>Все товары</h1>
        <CardList limit={10} />
      </div>
    </div>
  );
};

export default CardsPage;
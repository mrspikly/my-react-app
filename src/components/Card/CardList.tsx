import React, { useState, useEffect } from 'react';
import './Card.css';
import Card from './Card';
import photo1 from '../../assets/images/фото1.png';
import photo2 from '../../assets/images/фото2.png';
import photo3 from '../../assets/images/фото3.png';
import photo4 from '../../assets/images/фото4.png';

interface CardData {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}


interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 4 }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        );
        
        if (!response.ok) throw new Error('Ошибка сети');
        const data = await response.json();
        
        const images = [photo1, photo2, photo3, photo4];
        
        const cardsWithImages = data.map((item: any, index: number) => ({
          id: item.id,
          title: item.title,
          body: item.body,
          imageUrl: images[index % images.length]
        }));
        
        setCards(cardsWithImages);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]); 

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="card-container">
      {cards.map(card => (
        <Card 
          key={card.id}
          title={card.title}
          description={card.body}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <h1>404 — Страница не найдена</h1>
        <p>Извините, запрашиваемая страница не существует.</p>
        <Link to="/" className="btn">Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
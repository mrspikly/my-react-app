import { useState } from 'react';
import './Header.css';
import AuthModal from './AuthModal';
import { Link } from 'react-router';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/"><img 
            src="src/assets/images/imgLogo.png" 
            alt="Логотип сайта" 
            className="logo"
          /></Link>
        </div>

        
        
        <ul className="nav-links">
          <li><Link to="*">Продукты</Link></li>
          <li><Link to="*">Особенности</Link></li>
          <li><Link to="*">Поддержка</Link></li>
        </ul>
        
        <button 
          className="auth-button"
          onClick={() => setIsModalOpen(true)}
        >
          Авторизация
        </button>
      </nav>

      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
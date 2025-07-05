import React, { useEffect, useRef, useState } from 'react';
import { products } from './Section8_data';



const ProductSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [maxPosition, setMaxPosition] = useState(0);

 

  // Обновление параметров слайдера
  const updateSliderParams = () => {
    if (!sliderRef.current || !sliderContainerRef.current) return;

    const firstCard = sliderRef.current.querySelector('.cards_item') as HTMLElement;
    if (firstCard) {
      const cardStyle = window.getComputedStyle(firstCard);
      const width = firstCard.offsetWidth +
        parseInt(cardStyle.marginLeft) +
        parseInt(cardStyle.marginRight);
      setCardWidth(width);
    }

    const containerWidth = sliderContainerRef.current.offsetWidth;
    let newVisibleCards = 4;
    if (containerWidth < 480) newVisibleCards = 1;
    else if (containerWidth < 768) newVisibleCards = 2;
    else if (containerWidth < 1024) newVisibleCards = 3;

    setVisibleCards(newVisibleCards);

    const contentWidth = sliderRef.current.scrollWidth;
    const calculatedMaxPosition = -(contentWidth - containerWidth);
    setMaxPosition(calculatedMaxPosition);

    if (prevBtnRef.current) {
      prevBtnRef.current.disabled = true;
    }
    if (nextBtnRef.current) {
      nextBtnRef.current.disabled = contentWidth <= containerWidth;
    }
  };

  // Перемещение слайдера
  const moveSlider = (direction: 'prev' | 'next') => {
    const step = cardWidth * visibleCards;
    let newPosition = currentPosition;

    if (direction === 'next') {
      newPosition = Math.max(currentPosition - step, maxPosition);
    } else {
      newPosition = Math.min(currentPosition + step, 0);
    }

    setCurrentPosition(newPosition);

    // Обновляем состояние кнопок
    if (prevBtnRef.current) {
      prevBtnRef.current.disabled = newPosition >= 0;
    }
    if (nextBtnRef.current) {
      nextBtnRef.current.disabled = newPosition <= maxPosition;
    }
  };

  // Инициализация и обновление при ресайзе
  useEffect(() => {
    const init = () => {
      updateSliderParams();

      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${currentPosition}px)`;
      }
    };

    window.addEventListener('resize', init);
    setTimeout(init, 100); // Добавляем задержку для полной загрузки DOM

    return () => window.removeEventListener('resize', init);
  }, []);

  // Применяем позицию при изменении
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease';
      sliderRef.current.style.transform = `translateX(${currentPosition}px)`;
    }
  }, [currentPosition]);

  const handleNext = () => moveSlider('next');
  const handlePrev = () => moveSlider('prev');

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div 
        className="cards-slider" 
        ref={sliderRef}
        style={{ display: 'flex', transition: 'transform 0.5s ease' }}
      >
        {products.map(product => (
          <div key={product.id} className="cards_item" style={{ flexShrink: 0, width: `${100 / visibleCards}%`, padding: '10px' }}>
            <div className="card">
              <img 
                src={product.image} 
                className="card-img" 
                alt={product.title} 
              />
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">{product.title}</span>
                  <span className="card-price">{product.price}</span>
                </div>
                <p className="card-description">{product.description}</p>
                <button className="card-btn">Купить</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="slider-btn prev-btn" 
        ref={prevBtnRef} 
        onClick={handlePrev}
        aria-label="Предыдущий"
      ></button>
        
      
      <button 
        className="slider-btn next-btn" 
        ref={nextBtnRef} 
        onClick={handleNext}
        aria-label="Следующий"
      >
        
      </button>
    </div>
  );
};

export default ProductSlider;
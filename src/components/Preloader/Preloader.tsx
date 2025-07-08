import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (preloaderRef.current) {
        preloaderRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    timerRef.current = window.setTimeout(() => {
      setIsRemoving(true);
      
      timerRef.current = window.setTimeout(() => {
        setIsVisible(false);
        document.body.classList.add('loaded');
      }, 400);
    }, 1500);

    return () => {
      window.removeEventListener('resize', updatePosition);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={preloaderRef}
      className={`preloader ${isRemoving ? 'preloader--hiding' : ''}`}
    >
      <div className="preloader__loader" />
    </div>
  );
};

export default Preloader;
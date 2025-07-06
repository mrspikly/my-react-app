import React from 'react';
import { Link } from 'react-router-dom';
import Section1 from '../components/Section/Section1';
import Section3 from '../components/Section/Section3';
import Section4 from '../components/Section/Section4';
import Section5 from '../components/Section/Section5';
import Section6 from '../components/Section/Section6';
import Section7 from '../components/Section/Section7';
import Section8 from '../components/Section/Section8';
import CardList from '../components/Card/CardList';

const HomePage: React.FC = () => {
  return (
    <div>
      <Section1 />
      <section className="popular-products">
            <div className="container">
                <h2><Link to="/cards" className='popular'>Популярные товары</Link></h2>
                <CardList limit={3} />
            </div>
      </section> 
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      

    </div>
  );
};

export default HomePage;
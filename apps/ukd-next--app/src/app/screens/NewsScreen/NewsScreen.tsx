import React from 'react';
import './NewsScreen.scss';
import NewsCard from '../../components/NewsCard/NewsCard';

export default function NewsScreen() {
  return (
    <div className='newsscreen-container'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

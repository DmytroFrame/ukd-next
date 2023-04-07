import React, { useEffect, useState } from 'react';
import './NewsScreen.scss';
import NewsCard from '../../components/NewsCard/NewsCard';
import { INews } from './INews.interface';

export default function NewsScreen() {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((res) => setNews(res));
  }, []);

  return (
    <div className="newsscreen-container">
      {news?.map((news) => (
        <NewsCard news={news} />
      ))}
    </div>
  );
}

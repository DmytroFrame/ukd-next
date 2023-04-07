import React from 'react';
import { INews } from '../../screens/NewsScreen/INews.interface';
import './NewsCard.scss';

export default function NewsCard({ news }: { news: INews }) {
  return (
    <div className="newscard-container">
      {news.image && <div className="newscard-image">
        <img src={news.image} alt="" />
      </div>}
      {news.title && <div className="newscard-title">{news.title}</div> } 
      {news.description && <div className="newscard-description">{news.description}</div>}
    </div>
  );
}

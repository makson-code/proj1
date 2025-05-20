import React, { useState } from 'react';
import { useTopHeadlines } from '../hooks/useTopHeadlines';  
import { SearchForm } from '../components/Form/Form';
import s from './NewsPage.module.scss';

export function NewsPage() {

  const [filters, setFilters] = useState({
    country: 'us',         
    category: 'technology',
    pageSize: 10,         
  });


  const { data, isLoading, error } = useTopHeadlines(filters);

   console.log('filters:', filters);
  console.log('data:', data);
  console.log('error:', error);
  const handleSearch = (query) => {
    setFilters(prev => ({ ...prev, q: query }));
  };

  return (
    <div className={s.newsContainer}>
      <SearchForm onSearch={handleSearch} />

      {isLoading && <div className="loading">Загрузка...</div>}
      {error && <div className="error">Ошибка: {error.message}</div>}
      {!data?.articles?.length && !isLoading && <div>Новостей не найдено</div>}

      {data?.articles?.map(article => (
        <div key={article.url} className={s.newsItem}>
          <h3>{article.title}</h3>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className={s.newsImage}
            />
          )}
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Читать полностью
          </a>
        </div>
      ))}
    </div>
  );
}


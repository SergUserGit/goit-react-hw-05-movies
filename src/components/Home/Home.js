import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Home.module.css';
import { getQueryString, getResponse } from '../../js/moduleapi';

const Home = () => {
  const [rendArray, setRendArray] = useState([]);

  useEffect(() => {
    const url = getQueryString('trending/movie/day', '');
    const response = getResponse(url);
    response
      .then(data => {
        setRendArray([...data.results]);
      })
      .catch(error => {})
      .finally(() => {});
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {rendArray && (
        <ul>
          {rendArray.map(({ title, id }) => (
            <li key={id} className={css.movieItem}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Home;

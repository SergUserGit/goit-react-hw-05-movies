import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Home.module.css';
import { getQueryString, getResponse } from '../../js/moduleapi';

const Home = () => {
  const [rendArray, setRendArray] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=8bdb4b862ffa773481adb9dc6c5538df'
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Немає даних по запиту'));
      })
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

//    <Outlet />

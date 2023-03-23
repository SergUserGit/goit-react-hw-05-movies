import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [findText, setFindText] = useState('');
  const [rendArray, setRendArray] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8bdb4b862ffa773481adb9dc6c5538df&language=en-US&page=1&include_adult=false&query=${findText}`
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
      .catch(error => {
        console.log('Ошибка');
      })
      .finally(() => {});
  };

  const handleChange = e => {
    const { value } = e.target;
    setFindText(state => value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.findForm}>
        <input
          className={css.findInput}
          type="text"
          value={findText}
          name="find"
          autoComplete="off"
          autoFocus
          required
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {rendArray && (
        <ul>
          {rendArray.map(({ title, id }) => (
            <li key={id} className={css.movieItem}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;

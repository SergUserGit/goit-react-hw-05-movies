import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Movies.module.css';
import { getQueryString, getResponse } from '../../js/moduleapi';

const Movies = () => {
  const [findText, setFindText] = useState('');
  const [rendArray, setRendArray] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const url = getQueryString(
      'search/movie',
      `&language=en-US&page=1&include_adult=false&query=${findText}`
    );
    const response = getResponse(url);

    response
      .then(data => {
        setRendArray([...data.results]);
      })
      .catch(error => {})
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

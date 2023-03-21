import Home from './Home/Home';
import Movies from './Movies/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home myArray={rendArray} />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
//<Route path="/movies/:movieId" element={<MovieDetails />} />
// <Route path="MovieDetails" element={<MovieDetails />} />
// <Route path="/movies/:movieId" element={<MovieDetails />} /><Route path="/movies" element={<Movies />} />

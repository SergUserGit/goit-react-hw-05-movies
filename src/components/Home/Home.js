//import { Routes, Route, NavLink } from 'react-router-dom';
//import { Link, Outlet } from 'react-router-dom';
//import { useState } from 'react';
import { Link } from 'react-router-dom';

//let rendArray = null;

//import MovieDetails from 'components/MovieDetails/MovieDetails';
//fetch(
// 'https://api.themoviedb.org/3/trending/movie/day?api_key=8bdb4b862ffa773481adb9dc6c5538df'
//)
// .then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//    return Promise.reject(new Error('Немає даних по запиту'));
// })
//  .then(data => {
//   rendArray = [...data.results];
// })
// .catch(error => {})
// .finally(() => {});

const Home = ({ myArray }) => {
  return (
    <section>
      <h1>Trending today</h1>
      {myArray && (
        <ul>
          {myArray.map(({ title, id }) => (
            <li key={id}>
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

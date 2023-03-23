import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <nav className={css.navLink}>
        <NavLink
          id={'linkHome'}
          className={css.link + ' ' + css.link__color}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          id={'linkMovie'}
          className={css.link + ' ' + css.link__colorblack}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

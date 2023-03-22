import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  // const onClickLink = el => {
  //  if (el.target.id === 'linkHome') {
  //   const elMovie = document.querySelector('#linkMovie');
  //   if (!el.target.classList.contains(css.link__color)) {
  //     el.target.classList.add(css.link__color);
  //   }
  //   if (el.target.classList.contains(css.link__colorblack)) {
  //     el.target.classList.remove(css.link__color);
  //   }
  //   if (elMovie.classList.contains(css.link__color)) {
  //     elMovie.classList.remove(css.link__color);
  //   }
  //   if (!elMovie.classList.contains(css.link__colorblack)) {
  //     elMovie.classList.add(css.link__colorblack);
  //   }
  //  } else {
  //   const elHome = document.querySelector('#linkHome');

  //   if (!el.target.classList.contains(css.link__color)) {
  //     el.target.classList.add(css.link__color);
  //   }
  //   if (el.target.classList.contains(css.link__colorblack)) {
  //     el.target.classList.remove(css.link__colorblack);
  //   }
  //   if (elHome.classList.contains(css.link__color)) {
  //     elHome.classList.remove(css.link__color);
  //   }
  //   if (!elHome.classList.contains(css.link__colorblack)) {
  //     elHome.classList.add(css.link__colorblack);
  //  }
  //  }
  //};

  //numberPage === 1 ? css.link + ' ' + css.link__color : css.link + ' ' + css.link__colorblack;

  return (
    <div>
      <nav className={css.navLink}>
        <NavLink
          id={'linkHome'}
          className={css.link + ' ' + css.link__color}
          //    numberPage === 1
          //</nav>       ? css.link + ' ' + css.link__color
          //       : css.link + ' ' + css.link__colorblack
          //   }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          id={'linkMovie'}
          className={css.link + ' ' + css.link__colorblack}
          //   className={
          //      numberPage === 1
          //</nav>       ? css.link + ' ' + css.link__colorblack
          //        : css.link + ' ' + css.link__color
          //   }
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

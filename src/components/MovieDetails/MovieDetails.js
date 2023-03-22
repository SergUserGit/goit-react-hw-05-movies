import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [detailArray, setDetailArray] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=8bdb4b862ffa773481adb9dc6c5538df`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Немає даних по запиту'));
      })
      .then(data => {
        setDetailArray({ ...data });
        setGenres([...data.genres]);
      })
      .catch(error => {})
      .finally(() => {});
  }, [movieId]);

  return (
    <>
      <h2>{detailArray.title}</h2>
      <p>User Score {Math.ceil(detailArray.vote_average)}%</p>
      <h3>Overview</h3>
      <p>{detailArray.overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(el => el.name).join(' ')}</p>
      <img src={''} alt={detailArray.title} width={150} height={150} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
// <img src={src} alt={alt} /> <p>{userScore}</p>
//     <h3>Overview</h3>
//    <p>{Overview}</p>
//    <h3>Genres</h3>
//    <p>{Genres}</p>

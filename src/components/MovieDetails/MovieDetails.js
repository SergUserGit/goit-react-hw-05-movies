import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imgUrl from '../../img/noimage.png';
import css from './MovieDetails.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getQueryString, getResponse } from '../../js/moduleapi';

const MovieDetails = () => {
  const navigate = useNavigate();
  const [detailArray, setDetailArray] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const url = getQueryString(`movie/${movieId}`, '');
    const response = getResponse(url);
    response
      .then(data => {
        setDetailArray({ ...data });
        setGenres([...data.genres]);
      })
      .catch(error => {})
      .finally(() => {}); //
  }, [movieId]);

  const onGoBackClick = () => {
    navigate('/');
  };
  return (
    <div className={css.infoGroup}>
      <button type="button" onClick={onGoBackClick} className={css.buttonBack}>
        <AiOutlineArrowLeft className={css.icon} size={14} />
        <span>Go back</span>
      </button>
      <div className={css.infoMovieGroup}>
        <img
          src={
            detailArray.poster_path
              ? `https://image.tmdb.org/t/p/w500${detailArray.poster_path}`
              : imgUrl
          }
          alt={detailArray.title}
          width={240}
          height={400}
        />
        <div>
          <h2>{detailArray.title}</h2>
          <p>User Score {Math.ceil(detailArray.vote_average)}%</p>
          <h3>Overview</h3>
          <p>{detailArray.overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(el => el.name).join(' ')}</p>
        </div>
      </div>
      <div className={css.additionalBlock}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

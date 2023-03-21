//import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <>
      <h2>Это детальная информация про фильм, по id - {movieId}</h2>
    </>
  );
};

export default MovieDetails;
// <img src={src} alt={alt} /> <p>{userScore}</p>
//     <h3>Overview</h3>
//    <p>{Overview}</p>
//    <h3>Genres</h3>
//    <p>{Genres}</p>

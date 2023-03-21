//import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

//545611;

//fetch(
//  'https://api.themoviedb.org/3/movie/545611?api_key=8bdb4b862ffa773481adb9dc6c5538df'
//)
// .then(response => {
//  if (response.ok) {
//    return response.json();
//  }
//  return Promise.reject(new Error('Немає даних по запиту'));
// })
// .then(data => {
//    console.log(data);
// })
// .catch(error => {})
// .finally(() => {});

const MovieDetails = () => {
  const [detailArray, setDetailArray] = useState({});
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
      })
      .catch(error => {})
      .finally(() => {});
  }, [movieId]);

  console.log(detailArray);
  return (
    <>
      <h2>{detailArray.title}</h2>
      <p>User Score</p>
    </>
  );
};

export default MovieDetails;
// <img src={src} alt={alt} /> <p>{userScore}</p>
//     <h3>Overview</h3>
//    <p>{Overview}</p>
//    <h3>Genres</h3>
//    <p>{Genres}</p>

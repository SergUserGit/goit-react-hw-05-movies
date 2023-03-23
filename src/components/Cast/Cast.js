import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import imgUrl from '../../img/noimage.png';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8bdb4b862ffa773481adb9dc6c5538df&language=en-US`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Немає даних по запиту'));
      })
      .then(data => {
        setCasts([...data.cast]);
      })
      .catch(error => {})
      .finally(() => {});
  }, [movieId]);

  return (
    <ul>
      {casts.map(({ name, id, character, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : imgUrl
            }
            alt={'actor'}
            width={100}
            height={150}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

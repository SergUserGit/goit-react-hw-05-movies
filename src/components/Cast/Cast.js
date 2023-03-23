import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imgUrl from '../../img/noimage.png';
import { getQueryString, getResponse } from '../../js/moduleapi';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const url = getQueryString(`movie/${movieId}/credits`, '&language=en-US');
    const response = getResponse(url);
    response
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

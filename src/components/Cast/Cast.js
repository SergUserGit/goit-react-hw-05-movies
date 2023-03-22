import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  return <h1>Page cast {movieId} </h1>;
};

export default Cast;

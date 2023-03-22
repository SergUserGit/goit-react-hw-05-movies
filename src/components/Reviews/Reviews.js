import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  //results
  //content

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8bdb4b862ffa773481adb9dc6c5538df&language=en-US&page=1`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Немає даних по запиту'));
      })
      .then(data => {
        setReviews([...data.results]);
      })
      .catch(error => {})
      .finally(() => {});
  }, [movieId]);

  return (
    <p>
      {reviews.length > 0
        ? reviews.map(el => el.content).join(' ')
        : `We don't have any reviews for this move`}
    </p>
  );
};

export default Reviews;
//We don't have any reviews for this move

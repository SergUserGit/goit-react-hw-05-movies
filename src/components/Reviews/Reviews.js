import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQueryString, getResponse } from '../../js/moduleapi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = getQueryString(
      `movie/${movieId}/reviews`,
      '&language=en-US&page=1'
    );
    const response = getResponse(url);
    response
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

import {Review} from '../../types/review';
import {getFormattedDate, getFormattedDatetime} from '../../utils';

type FilmReviewProps = {
  review: Review;
}

function FilmReview({review}: FilmReviewProps): JSX.Element {
  const formattedDate: string = getFormattedDate(review.date);
  const formattedDatetime: string = getFormattedDatetime(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={formattedDatetime}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default FilmReview;

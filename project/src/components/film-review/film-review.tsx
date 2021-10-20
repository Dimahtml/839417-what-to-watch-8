/* eslint-disable no-console */
import {Comment} from '../../types/comments';
import {getFormattedDate, getFormattedDatetime} from '../../utils';

type FilmReviewProps = {
  review: Comment;
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
          {/* dateTime="2016-12-24"   вот такой нужен формат даты*/}
          <time className="review__date" dateTime={formattedDatetime}>{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default FilmReview;

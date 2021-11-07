import React from 'react';
import {Film} from '../../types/film';
import {Reviews} from '../../types/review';
import FilmReview from '../film-review/film-review';
import {getFormattedRuntime} from '../../utils';

type TabContentProps = {
  film: Film;
  tabIndex: number;
  reviews: Reviews;
}

function TabContent({film, tabIndex, reviews}: TabContentProps): JSX.Element {
  const starsString = film.starring.slice(0, 3).join(', ');

  if (tabIndex === 0) {
    return (
      <React.Fragment>
        <div className="film-rating">
          <div className="film-rating__score">{film.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">Very good</span>
            <span className="film-rating__count">{film.scoresCount} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{film.description}</p>

          <p className="film-card__director"><strong>Director: {film.director}</strong></p>

          <p className="film-card__starring"><strong>Starring: {starsString} and other</strong></p>
        </div>
      </React.Fragment>
    );
  } else if (tabIndex === 1) {
    const starsWithoutLast: string[] = film.starring.slice();
    const starsLastItem: string[] = starsWithoutLast.splice(-1, 1);

    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starsWithoutLast.map((starItem) => (
                <React.Fragment key={starItem}>
                  {starItem},<br />
                </React.Fragment>
              ))}
              {starsLastItem[0]}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{getFormattedRuntime(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    );
  }

  const oddReviews: Reviews = [];
  const evenReviews: Reviews = [];

  reviews.map((review, index) => {
    index % 2 === 0 ? oddReviews.push(review) : evenReviews.push(review);
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {oddReviews.map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {evenReviews.map((comment) => (
          <FilmReview review={comment} key={comment.id}/>
        ))}
      </div>
    </div>
  );
}

export default TabContent;

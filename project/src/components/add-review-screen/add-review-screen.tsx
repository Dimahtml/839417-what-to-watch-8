import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import {Film, Films} from '../../types/film';

type AddReviewScreenProps = {
  films: Films;
}

function AddReviewScreen({films}: AddReviewScreenProps): JSX.Element {

  const {id} = useParams<{id?: string}>();
  const film = films.find((filmItem) => filmItem.id === Number(id)) || {} as Film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.previewImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo className="logo__link" path="/" />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.previewImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReviewScreen;

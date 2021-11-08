import { connect, ConnectedProps} from 'react-redux';
import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import SimilarFilmsList from '../similar-films-list/similar-films-list';
import UserBlock from '../user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import {BackendFilm, Film} from '../../types/film';
import {fetchCurrentFilmAction, fethcSimilarFilmsAction, fetchReviewsAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({currentFilm, similarFilms, reviews, authorizationStatus}: State) => ({
  currentFilm,
  similarFilms,
  reviews,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
  fetchSimilarFilms(id: number) {
    dispatch(fethcSimilarFilmsAction(id));
  },
  fetchReviews(id: number) {
    dispatch(fetchReviewsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MovieScreen(props: ConnectedComponentProps): JSX.Element {
  const {fetchCurrentFilm, fetchSimilarFilms, fetchReviews, currentFilm, similarFilms, reviews, authorizationStatus} = props;
  const id = parseInt(useParams<{id: string}>().id, 10);
  const film: Film | BackendFilm = currentFilm;

  useEffect(() => {
    fetchCurrentFilm(id);
  }, [fetchCurrentFilm, id]);

  useEffect(() => {
    fetchSimilarFilms(id);
  }, [fetchSimilarFilms, id]);

  useEffect(() => {
    fetchReviews(id);
  }, [fetchReviews, id]);

  if (film.id === 0) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo className="logo__link" path="/" />
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to='/mylist' className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.previewImage} alt={film.name} width="218" height="327" />
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarFilmsList films={similarFilms} currentFilm={film}/>
        </section>

        <footer className="page-footer">
          <Logo className="logo__link logo__link--light" path="/" />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export {MovieScreen};
export default connector(MovieScreen);

/* eslint-disable no-console */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import {Film} from '../../types/film';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {fetchFilmAction, fetchPromoFilmAction} from '../../store/api-actions';
import MyListPlusButton from '../my-list-plus-button/my-list-plus-button';
import MyListCheckButton from '../my-list-check-button/my-list-check-button';

type MainProps = {
  filmPromo: Film;
}

function MainScreen(props: MainProps): JSX.Element {
  const {filmPromo} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction());
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromo.backgroundImage} alt={filmPromo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo className="logo__link" path="#" />
          </div>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmPromo.posterImage} alt={filmPromo.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre}</span>
                <span className="film-card__year">{filmPromo.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`player/${filmPromo.id}`} className="btn btn--play film-card__button" type="button" >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  to='/mylist'
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => console.log('qwerqwer')}
                >
                  {filmPromo.isFavorite ?
                    <MyListCheckButton /> :
                    <MyListPlusButton />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo className="logo__link logo__link--light" path="#" />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;

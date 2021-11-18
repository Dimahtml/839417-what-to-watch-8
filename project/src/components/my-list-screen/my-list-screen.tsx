import {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import SmallFilmCard from '../small-film-card/small-film-card';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import {Film} from '../../types/film';

const mapStateToProps = ({favoriteFilms, authorizationStatus}: State) => ({
  authorizationStatus,
  favoriteFilms,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchFavoriteFilms() {
    dispatch(fetchFavoriteFilmsAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;


function MyListScreen(props: ConnectedComponentProps): JSX.Element {
  const {fetchFavoriteFilms, favoriteFilms} = props;

  useEffect(() => {
    fetchFavoriteFilms();
  }, [fetchFavoriteFilms]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo path="/" className="logo__link" />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film: Film) => <SmallFilmCard film={film} key={film.id} /> )}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);

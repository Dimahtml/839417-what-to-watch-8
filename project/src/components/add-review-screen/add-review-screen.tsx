import {Link, useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import Logo from '../logo/logo';
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewForm from '../review-form/review-form';
import {State} from '../../types/state';
import {AddReview as AddReviewType} from '../../types/add-review';
import {addReviewAction, fetchCurrentFilmAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const';

const mapStateToProps = ({currentFilm}: State) => ({
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchCurrentFilm(id: number) {
    dispatch(fetchCurrentFilmAction(id));
  },
  addReview(id: number, review: AddReviewType) {
    dispatch(addReviewAction(id, review));
    dispatch(redirectToRoute(AppRoute.Film));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function AddReviewScreen({currentFilm, addReview}: ConnectedComponentProps): JSX.Element {
  const film = currentFilm;
  const id = parseInt(useParams<{ id: string }>().id, 10);

  if (!film) {
    return (
      <LoadingScreen />
    );
  }

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

      <ReviewForm onSubmit={(review) => addReview(id, review)} />

    </section>
  );
}

export {AddReviewScreen};
export default connector(AddReviewScreen);

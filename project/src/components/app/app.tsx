import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import MovieScreen from '../movie-screen/movie-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Film, Films} from '../../types/film';

type AppScreenProps = {
  filmPromo: Film;
  films: Films;
}

function App({filmPromo, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainPage}>
          <MainScreen
            filmPromo={filmPromo}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen films={films} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <MovieScreen films={films} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

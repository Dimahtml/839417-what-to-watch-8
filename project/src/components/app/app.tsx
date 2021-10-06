import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPageScreen from '../main-page-screen/main-page-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import MovieScreen from '../movie-screen/movie-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';

type AppProps = {
  name: string,
  genre: string,
  released: string,
}

function App({name, genre, released}: AppProps): JSX.Element {
  // return <MainPageScreen name={name} genre={genre} released={released} />;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainPage}>
          <MainPageScreen name={name} genre={genre} released={released} />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MovieScreen />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

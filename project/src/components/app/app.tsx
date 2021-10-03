import MainPage from '../main-page/main-page';

type AppProps = {
  name: string,
  genre: string,
  released: string,
}

function App({name, genre, released}: AppProps): JSX.Element {
  return <MainPage name={name} genre={genre} released={released} />;
}

export default App;

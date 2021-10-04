import MainPageScreen from '../main-page-screen/main-page-screen';

type AppProps = {
  name: string,
  genre: string,
  released: string,
}

function App({name, genre, released}: AppProps): JSX.Element {
  return <MainPageScreen name={name} genre={genre} released={released} />;
}

export default App;

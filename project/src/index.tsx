import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILM_DATA = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {FILM_DATA.name} genre = {FILM_DATA.genre} released = {FILM_DATA.released}
    />
  </React.StrictMode>,
  document.getElementById('root'));

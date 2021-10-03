import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILM_PROMO = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {FILM_PROMO.name}
      genre = {FILM_PROMO.genre}
      released = {FILM_PROMO.released}
    />
  </React.StrictMode>,
  document.getElementById('root'));

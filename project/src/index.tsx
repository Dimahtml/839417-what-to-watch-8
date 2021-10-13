import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from '../src/mocks/films';
import {promoFilm} from '../src/mocks/promo-film';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmPromo={promoFilm}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));

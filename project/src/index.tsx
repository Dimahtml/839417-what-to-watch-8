import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {films} from '../src/mocks/films';
import {promoFilm} from '../src/mocks/promo-film';
import {reducer} from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        filmPromo={promoFilm}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from '../src/mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmPromo={films[0]}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));

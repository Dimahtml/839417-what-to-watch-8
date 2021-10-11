import {Film} from '../types/film';

export const promoFilm: Film = {
  id: 1,
  name: 'Aviator',
  posterImage: '../../img/aviator.jpg',
  previewImage: '../../img/aviator.jpg',
  backgroundImage: '../../img/aviator.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
  rating: '7,5',
  scoresCount: 346,
  director: 'Martin Scorsese',
  starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
  runTime: 170,
  genre: 'Drama',
  released: 2004,
  isFavorite: true,
};

import {Film, BackendFilm} from '../src/types/film';

// Функция для перевода строкового значения даты в формат, используемый в комментарии на странице review-film
export const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  const month: string = currentDate.toLocaleString('en', { month: 'long' });
  const day: string = currentDate.getDate().toString();

  return `${month} ${day}, ${year}`;
};

// Функция для перевода строкового значения даты в формат, используемый в атрибуте dateTime
export const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.toLocaleString('en', {year: 'numeric'});
  const month: string = currentDate.toLocaleString('en', {month: '2-digit'});
  const day: string = currentDate.toLocaleString('en', {day: '2-digit'});

  return `${year}-${month}-${day}`;
};

// Функция для перевода минут в строку
export const getFormattedRuntime = (durationInMinutes: number): string => {
  const minutesInHour = 60;
  let result: string;
  const minutes: number = (durationInMinutes) % minutesInHour;

  if (durationInMinutes >= minutesInHour) {
    const hours: number = Math.floor(durationInMinutes / minutesInHour);
    result = `${hours}h ${minutes}m`;
    return result;
  }

  result = `${minutes}m`;
  return result;
};

// Паттерн адаптер
export const adaptToClient = (film: BackendFilm): Film => {
  const adaptedFilm: Film = {
    id: film.id,
    name: film.name,
    description: film.description,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    released: film.released,
    posterImage: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    scoresCount: film['scores_count'],
    runTime: film['run_time'],
    isFavorite: film['is_favorite'],
  };

  return adaptedFilm;
};

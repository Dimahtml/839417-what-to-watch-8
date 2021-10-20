// Функция для перевода строкового значения даты в формат, используемый в комментарии на странице review-film
export const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  let month: string = currentDate.getMonth().toString();
  const day: string = currentDate.getDate().toString();

  switch (month) {
    case '0':
      month = 'January';
      break;
    case '1':
      month = 'February';
      break;
    case '2':
      month = 'March';
      break;
    case '3':
      month = 'April';
      break;
    case '4':
      month = 'May';
      break;
    case '5':
      month = 'June';
      break;
    case '6':
      month = 'July';
      break;
    case '7':
      month = 'August';
      break;
    case '8':
      month = 'September';
      break;
    case '9':
      month = 'October';
      break;
    case '10':
      month = 'November';
      break;
    case '11':
      month = 'December';
      break;
    default:
      month = '';
      break;
  }

  return `${month} ${day}, ${year}`;
};

// Функция для перевода строкового значения даты в формат, используемый в атрибуте dateTime
export const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  let month: string = currentDate.getMonth().toString();
  let day: string = currentDate.getDate().toString();

  if (day.length < 2) {
    day = `0${day}`;
  }

  switch (month) {
    case '0':
      month = '01';
      break;
    case '1':
      month = '02';
      break;
    case '2':
      month = '03';
      break;
    case '3':
      month = '04';
      break;
    case '4':
      month = '05';
      break;
    case '5':
      month = '06';
      break;
    case '6':
      month = '07';
      break;
    case '7':
      month = '08';
      break;
    case '8':
      month = '09';
      break;
    case '9':
      month = '10';
      break;
    case '10':
      month = '11';
      break;
    case '11':
      month = '12';
      break;
    default:
      month = '';
      break;
  }

  return `${year}-${month}-${day}`;
};

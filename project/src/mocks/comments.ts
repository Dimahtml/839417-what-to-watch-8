import {Comments} from '../types/comments';
import {Comment} from '../types/comments';

export const comment: Comment = {
  id: 1,
  user: {
    id: 1,
    name: 'Donald Duck',
  },
  rating: '8,0',
  comment: 'Super film! super film. mega super film. It is a comment for this perfect film. I watched it and I liked it!',
  'date': '2019-05-08T14:13:56.569Z',
};

export const comments: Comments = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Donald Duck',
    },
    rating: '8,0',
    comment: 'Super film! super film. mega super film. It is a comment for this perfect film. I watched it and I liked it!',
    'date': '2019-05-08T14:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Mickey Mouse',
    },
    rating: '7,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2019-06-09T12:15:46.569Z',
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Scrooge McDuck',
    },
    rating: '6,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2019-02-09T10:15:16.569Z',
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Woody Woodpecker',
    },
    rating: '8,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2019-08-11T02:00:48.569Z',
  },
  {
    id: 5,
    user: {
      id: 5,
      name: 'Bugs Bunny',
    },
    rating: '5,0',
    comment: 'I liked this movie because the story is unpredictable and non-trivial.',
    date: '2019-09-10T19:22:01.569Z',
  },
  {
    id: 6,
    user: {
      id: 6,
      name: 'Chip and Dale',
    },
    rating: '6,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2019-12-18T20:28:31.569Z',
  },
  {
    id: 7,
    user: {
      id: 4,
      name: 'Woody Woodpecker',
    },
    rating: '8,0',
    comment: 'Very very good actors. Movie is very good. Everything is good',
    date: '2019-08-11T02:00:48.569Z',
  },
  {
    id: 8,
    user: {
      id: 5,
      name: 'Bugs Bunny',
    },
    rating: '5,0',
    comment: 'Das ist fantastish!!! Sehr gut! Ich liebe. Das ist fantastish!!! Sehr gut! Ich liebe. Das ist fantastish!!! Sehr gut! Ich liebe.',
    date: '2019-09-10T19:22:01.569Z',
  },
  {
    id: 9,
    user: {
      id: 6,
      name: 'Chip and Dale',
    },
    rating: '6,0',
    comment: 'The best actors work in the world! Music is awesome. You have to watch this film necessarily.',
    date: '2019-12-18T20:28:31.569Z',
  },
];


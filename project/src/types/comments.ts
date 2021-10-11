export type Comment = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: string,
  comment: string,
  date: string,
};

export type Comments = Comment[];

import { IContent } from '../types/shape';

interface ISelectionFilterArg {
  series: IContent[];
  films: IContent[];
}

export default function selectionFilter({
  series,
  films,
}: ISelectionFilterArg) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'thriller'),
      },
      {
        title: 'Suspense',
        data: films.filter((item) => item.genre === 'suspense'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}

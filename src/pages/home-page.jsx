import { Fragment } from 'react';
import MovieList from '../components/movie-list';

export default function HomePage() {
  return (
    <Fragment>
      <h1>home page</h1>
      <MovieList />
    </Fragment>
  );
}

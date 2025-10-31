import { Fragment, useEffect, useState } from 'react';
import { apiInstance } from '../../utils/api';

export function MovieList() {
  const [movies, setMovies] = useState({
    data: [],
    metadata: {},
  });
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    setLoading(true);
    apiInstance
      .get('movies')
      .then(function (serverResponse) {
        setMovies(serverResponse.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, []);
  return (
    <Fragment>
      <h1>List</h1>
      <ul>
        {movies.data.map(function ({ id, title, poster }) {
          return (
            <li key={id}>
              <img loading="lazy" src={poster} />
              <h2>{title}</h2>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

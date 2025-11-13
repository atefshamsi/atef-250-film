import { Fragment, useEffect, useState } from 'react';
import { apiInstance } from '../utils/api';
import { useSearchParams, createSearchParams } from 'react-router-dom';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundedMovies, setFoundedMovies] = useState({
    data: [],
    metadata: {
      current_page: '1',
      per_page: 1,
      page_count: 1,
      total_count: 1,
    },
  });
  const q = searchParams.get('q') ?? '';
  async function getApi(value) {
    try {
      const response = await apiInstance.get('movies', {
        params: {
          q: value,
        },
      });
      setFoundedMovies(response.data);
    } catch (e) {}
  }
  async function onChange(e) {
    getApi(e.target.value);
  }
  useEffect(function () {
    getApi(q);
  }, []);
  return (
    <Fragment>
      <h1>search</h1>
      <input onChange={onChange} placeholder="please input name of movie" />
      {foundedMovies.data.map(({ title, poster }) => {
        return (
          <Fragment>
            {' '}
            <h2>{title}</h2>;
            <img style={{ maxWidth: '100px' }} src={poster} />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

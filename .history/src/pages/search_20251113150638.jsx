import { Fragment, useEffect, useState } from 'react';
import { apiInstance } from '../utils/api';
import { useSearchParams, createSearchParams } from 'react-router-dom';
import { Input } from 'antd';

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
    if (value >= 3) {
      try {
        const response = await apiInstance.get('movies', {
          params: {
            q: value,
          },
        });
        setFoundedMovies(response.data);
        setSearchParams(createSearchParams({ q: value }));
      } catch (e) {}
    }
  }
  async function onChange(e) {
    getApi(e.target.value);
  }
  useEffect(function () {
    if (q !== '') getApi(q);
  }, []);
  return (
    <Fragment>
      <h1>search</h1>
      <Input onChange={onChange} placeholder="Basic usage" />
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

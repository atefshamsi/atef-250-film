import { Fragment, useState } from 'react';
import { apiInstance } from '../utils/api';

export default function SearchPage() {
  const [foundedMovies, setFoundedMovies] = useState({
    data: [],
    metadata: {
      current_page: '1',
      per_page: 1,
      page_count: 1,
      total_count: 1,
    },
  });
  async function onChange(e) {
    console.log(e.target.value);
    const response = await apiInstance.get('movies', {
      params: {
        q: e.target.value,
      },
    });
    setFoundedMovies(response.data);
    console.log(response);
  }
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

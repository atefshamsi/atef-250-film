import { Fragment } from 'react';
import { apiInstance } from '../utils/api';

export default function SearchPage() {
  async function onChange(e) {
    console.log(e.target.value);
    apiInstance.get('movies', {
      params: {(q: e.target.value)},
    });
  }
  return (
    <Fragment>
      <h1>search</h1>
      <input onChange={onChange} placeholder="please input name of movie" />
    </Fragment>
  );
}

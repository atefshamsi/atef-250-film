import { Fragment, useState } from 'react';
import { apiInstance } from '../utils/api';

export default function SearchPage() {
    const [] = useState({
        data:[],
        metadata:{
            
current_page
: 
"1"
page_count
: 
1
per_page
: 
12
total_count
: 
3
        }
    })
  async function onChange(e) {
    console.log(e.target.value);
    const response = await apiInstance.get('movies', {
      params: {
        q: e.target.value,
      },
    });
    console.log(response);
  }
  return (
    <Fragment>
      <h1>search</h1>
      <input onChange={onChange} placeholder="please input name of movie" />
    </Fragment>
  );
}

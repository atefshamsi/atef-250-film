import { useEffect, useState } from 'react';
import { apiInstance } from '../../utils/api';
import { Spin, Col, Typography, Row, Button, Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useSearchParams, createSearchParams } from 'react-router-dom';

const { Title } = Typography;
export default function MovieList() {
  const [movies, setMovies] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 12,
      page_count: 25,
      total_count: 250,
    },
  });
  const [loading, setLoading] = useState(false);
  const [queryStrings, setQueryStrings] = useSearchParams();
  const page = queryStrings.get('page') ?? '1';
  // function getApi(page = 1) {
  //   setLoading(true);
  //   apiInstance
  //     .get(`movies?page=${page}`)
  //     .then(function (serverResponse) {
  //       setMovies(serverResponse.data);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       setLoading(false);
  //     });
  // }
  const getApi = async (page = 1) => {
    try {
      setLoading(true);
      const response = await apiInstance.get('movies', {
        params: { page },
      });
      if (page != '1') {
        setQueryStrings(createSearchParams({ page }));
      }
      setMovies(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(function () {
    getApi(page);
  }, []);
  function onChange(page) {
    getApi(page);
  }
  return (
    <div className="container">
      <Spin
        indicator={<LoadingOutlined spin />}
        spinning={loading}
        tip="Loading"
        size="large"
      >
        <h1>List</h1>
        <Row gutter={16}>
          {movies.data.map(function ({ id, title, poster }) {
            return (
              <Col key={id} xs={2} sm={4} md={6} lg={8} xl={10}>
                <li>
                  <Button type="primary">test</Button>
                  <img loading="lazy" src={poster} />
                  <Title ellipsis level={4}>
                    {title}
                  </Title>
                </li>
              </Col>
            );
          })}
        </Row>
        <Pagination
          align="center"
          showSizeChanger={false}
          defaultCurrent={1}
          current={movies.metadata.current_page}
          pageSize={movies.metadata.per_page}
          total={movies.metadata.total_count}
          onChange={onChange}
        />
      </Spin>
    </div>
  );
}

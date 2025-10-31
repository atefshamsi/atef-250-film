import { useEffect, useState } from 'react';
import { apiInstance } from '../../utils/api';
import { Spin, Col, Typography, Row } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;
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
              <Col key={id} xs={20} sm={16} md={12} lg={8} xl={4}>
                <li>
                  <img loading="lazy" src={poster} />
                  <Title level={4}>{title}</Title>
                </li>
              </Col>
            );
          })}
        </Row>
      </Spin>
    </div>
  );
}

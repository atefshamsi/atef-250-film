import { createRoot } from 'react-dom/client';
import Router from './components/router.jsx';
import './global.css';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#ebc853ff',
        borderRadius: 10,
      },
    }}
  >
    <Router />
  </ConfigProvider>
);

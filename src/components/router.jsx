import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimaryLayout } from './layouts/primary-layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home-page'));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

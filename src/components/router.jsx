import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimaryLayout } from './layouts/primary-layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home-page'));
const SearchPage = lazy(() => import('../pages/search'));
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

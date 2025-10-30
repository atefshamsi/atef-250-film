import { Fragment } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';

export function PrimaryLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

import { Fragment } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;

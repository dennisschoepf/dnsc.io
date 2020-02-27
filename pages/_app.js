import '../styles/index.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default MyApp;
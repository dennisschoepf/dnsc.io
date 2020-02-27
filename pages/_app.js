import '../styles/index.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>schoepf.co - Intro & Projects</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Hello there, I am Dennis Schoepf a designer/developer with over 5 years of professional experience, currently doing a master's degree in Human-Computer-Interaction in Salzburg, Austria."/>
        <meta name="keywords" content="Dennis Schoepf, Dennis, Schoepf, Personal Website, Projects" />
        <meta name="author" content="Dennis Schoepf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default MyApp;
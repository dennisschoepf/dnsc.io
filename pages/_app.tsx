import { Fragment } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment><Nav /><Component {...pageProps} /></Fragment>;
}

export default MyApp;

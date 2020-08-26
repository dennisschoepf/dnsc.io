import Head from 'next/head';
import { Fragment } from 'react';
import Nav from '../src/components/Nav';
import Container from '../src/components/Container';

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>dnsc.io - About me 👱</title>
      </Head>
      <Container>About</Container>
    </Fragment>
  );
}

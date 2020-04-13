import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import Paragraph from '../src/components/Paragraph';
import StyledLink from '../src/components/StyledLink';
import Container from '../src/components/Container';

export default () => (
  <Fragment>
    <Head>
      <title>dnsc.io - Hello there 👋</title>
    </Head>
    <Container className="text-6xl text-center">
      Showcase &middot; Canon &middot; Writing &middot; Writing
    </Container>
  </Fragment>
);

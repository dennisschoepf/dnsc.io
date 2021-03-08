import { Fragment } from 'react';
import Hero from '../src/components/Hero';
import Nav from '../src/components/Nav';

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <Hero />
    </Fragment>
  );
}

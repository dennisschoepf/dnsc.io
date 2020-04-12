import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import Paragraph from '../src/components/Paragraph';
import StyledLink from '../src/components/StyledLink';

export default () => (
  <Fragment>
    <Head>
      <title>dnsc.io - Hello there 👋</title>
    </Head>
    <Hero headline="Hello there,">
      <Paragraph>
        I am Dennis, a web developer turned Human-Computer-Interaction Master's
        student. This is the place where you can find information{' '}
        {/*<StyledLink href="/about">*/}about me{/*</StyledLink>*/} & take a
        look at my <StyledLink href="/canon">personal canon</StyledLink> to see
        what influenced me.
        {/* - or you could just scroll down to see a showcase of the
        projects I have worked on. */}
      </Paragraph>
    </Hero>
    {/* <Projects /> */}
  </Fragment>
);

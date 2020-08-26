import { Fragment } from 'react';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import Paragraph from '../src/components/Paragraph';
import StyledLink from '../src/components/StyledLink';
import Container from '../src/components/Container';
import Shape, { shapes } from '../src/components/Shape';

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>dnsc.io - Hello there 👋</title>
      </Head>
      <Hero>
        <h1>Hi, I'm Dennis.</h1>
        <div className="flex items-center">
          Student
          <Shape
            shape={shapes.CIRCLE}
            color="#FAFF13"
            size={14}
            className="ml-4"
          />
        </div>
        <div className="flex items-center">
          Developer
          <Shape
            shape={shapes.TRIANGLE}
            color="#FF2F2F"
            size={14}
            className="ml-4"
          />
        </div>
        <div className="flex items-center">
          Designer
          <Shape
            shape={shapes.SQUARE}
            color="#1D92FF"
            size={14}
            className="ml-4"
          />
        </div>
      </Hero>
    </Fragment>
  );
}

import Head from 'next/head';
import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';

export default function Home() {
  const theme = useTheme();

  return (
    <Fragment>
      <Head>
        <title>dnsc.io</title>
      </Head>
    </Fragment>
  );
}

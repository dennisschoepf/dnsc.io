import Head from 'next/head';
import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';
import { getDocumentTitle } from '../helpers/document';

export default function Home() {
  const theme = useTheme();

  return (
    <Fragment>
      <Head>
        <title>{getDocumentTitle('Home')}</title>
      </Head>
    </Fragment>
  );
}

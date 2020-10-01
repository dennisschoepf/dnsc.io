import { Head } from 'next/document';
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
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        Coming soon ...
      </div>
    </Fragment>
  );
}

import Head from 'next/head';
import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import DocumentTitle from '../components/DocumentTitle';
import Title from '../components/Title';
import { getDocumentTitle } from '../lib/document';

export default function Home() {
  const theme = useTheme();

  return (
    <Fragment>
      <DocumentTitle title="Welcome" />
    </Fragment>
  );
}

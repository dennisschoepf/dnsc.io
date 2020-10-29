import Head from 'next/head';
import { getDocumentTitle } from '../lib/document';

export default function DocumentTitle({ title }) {
  return (
    <Head>
      <title>{getDocumentTitle(title)}</title>
    </Head>
  );
}

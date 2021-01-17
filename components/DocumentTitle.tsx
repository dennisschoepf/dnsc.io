import Head from 'next/head';

interface DocumentTitleProps {
  title: string;
}

export default function DocumentTitle({ title }: DocumentTitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

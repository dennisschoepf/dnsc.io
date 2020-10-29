import Head from 'next/head';
import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import DocumentTitle from '../components/DocumentTitle';
import Title from '../components/Title';
import Container from '../components/Container';
import Spacer from '../components/Spacer';
import Shape, { shapes } from '../components/Shape';
import { getDocumentTitle } from '../lib/document';

const TitleContainer = styled.div`
  margin: ${({ theme }) => theme.sizes.xxxl} 0 0 0;
`;

export default function Home() {
  const theme = useTheme();

  return (
    <Fragment>
      <DocumentTitle title="Welcome" />
      <section id="hero">
        <Container>
          <TitleContainer>
            <Title>
              No fuss.
              <br />
              From start to finish
            </Title>
          </TitleContainer>
        </Container>
      </section>
    </Fragment>
  );
}

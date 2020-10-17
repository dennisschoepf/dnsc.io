import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import Container from '../components/Container';
import Gallery from '../components/Gallery/Gallery';
import GalleryItem from '../components/Gallery/GalleryItem';
import Shape, { shapes, Shapes } from '../components/Shape';
import Title from '../components/Title';
import work from '../content/creative/work';

export default function Creative() {
  const { colors, sizes } = useTheme();

  return (
    <Fragment>
      <Container bgColor={colors.black}>
        <Title>
          <Shapes>
            <Shape shape={shapes.SQUARE} color={colors.blue} />
            <Shape ml={sizes.s} shape={shapes.CIRCLE} color={colors.yellow} />
            <Shape ml={sizes.s} shape={shapes.TRIANGLE} color={colors.red} />
          </Shapes>
          Photography, Sketches & More
        </Title>
      </Container>
      <Container bgColor={colors.black}>
        <Gallery galleryItems={work} />
      </Container>
    </Fragment>
  );
}

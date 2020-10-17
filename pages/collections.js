import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import Accordion from '../components/Accordion/Accordion';
import CollectionSubcategories from '../components/CollectionSubcategories';
import Container from '../components/Container';
import Description from '../components/Description';
import Shape, { Shapes, shapes } from '../components/Shape';
import Title from '../components/Title';
import categories from '../content/collections/categories';

export default function Collections() {
  const { colors, sizes } = useTheme();
  const accordionItems = categories.map((category) => ({
    summary: category.name,
    detail: <CollectionSubcategories subcategories={category.subcategories} />,
  }));

  return (
    <Fragment>
      <Container bgColor={colors.black}>
        <Title>
          <Shapes>
            <Shape shape={shapes.CIRCLE} color={colors.yellow} />
            <Shape ml={sizes.s} shape={shapes.TRIANGLE} color={colors.red} />
            <Shape ml={sizes.s} shape={shapes.SQUARE} color={colors.blue} />
          </Shapes>
          Collections & Lists
        </Title>
      </Container>
      <Container>
        <Description>
          Below you can find collections of links, articles, tools and more that
          I find myself referring to often. They help me a lot in my daily work
          and make my life that much easier.
        </Description>
        <Accordion items={accordionItems} />
      </Container>
    </Fragment>
  );
}

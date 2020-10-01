import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import Accordion from '../components/Accordion/Accordion';
import Container from '../components/Container';
import Shape, { shapes } from '../components/Shape';
import Title from '../components/Title';

const Shapes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.sizes.l};
`;

export default function Collections() {
  const { colors, sizes } = useTheme();

  const testCat = [
    {
      summary: 'Design',
      detail: <div>Details</div>,
    },
  ];

  return (
    <Fragment>
      <Container bgColor={colors.black}>
        <Title>
          <Shapes>
            <Shape shape={shapes.CIRCLE} color={colors.yellow} />
            <Shape ml={sizes.s} shape={shapes.TRIANGLE} color={colors.red} />
            <Shape ml={sizes.s} shape={shapes.SQUARE} color={colors.blue} />
          </Shapes>
          Collections
        </Title>
      </Container>
      <Container>
        <Accordion items={testCat} />
      </Container>
    </Fragment>
  );
}

import { useTheme } from 'styled-components';
import Container from '../components/Container';
import Shape, { shapes, Shapes } from '../components/Shape';
import Title from '../components/Title';

export default function Thoughts() {
  const { colors, sizes } = useTheme();

  return (
    <Container bgColor={colors.black}>
      <Title>
        <Shapes>
          <Shape shape={shapes.TRIANGLE} color={colors.red} />
          <Shape ml={sizes.s} shape={shapes.CIRCLE} color={colors.yellow} />
          <Shape ml={sizes.s} shape={shapes.SQUARE} color={colors.blue} />
        </Shapes>
        Thoughts, Notes & Writing
      </Title>
    </Container>
  );
}

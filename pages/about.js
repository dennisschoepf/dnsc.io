import { useTheme } from 'styled-components';
import Container from '../components/Container';
import Shape, { shapes, Shapes } from '../components/Shape';
import Title from '../components/Title';

export default function Creative() {
  const { colors, sizes } = useTheme();

  return (
    <Container>
      <Title>
        <Shapes>
          <Shape shape={shapes.CIRCLE} color={colors.yellow} />
          <Shape ml={sizes.s} shape={shapes.SQUARE} color={colors.blue} />
          <Shape ml={sizes.s} shape={shapes.TRIANGLE} color={colors.red} />
        </Shapes>
        Hi, I'm Dennis 👋
      </Title>
    </Container>
  );
}

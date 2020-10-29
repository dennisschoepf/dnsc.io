import { Fragment } from 'react';
import { useTheme } from 'styled-components';
import Container from '../components/Container';

export default function Thoughts() {
  const { colors, sizes } = useTheme();

  return (
    <Fragment>
      <Container bgColor={colors.black}></Container>
    </Fragment>
  );
}

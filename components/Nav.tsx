import Container, { ContainerType } from './Container';
import Logo from './Logo';

export default function Nav() {
  return (
    <Container className="flex justify-center" type={ContainerType.WIDE}>
      <Logo />
    </Container>
  );
}

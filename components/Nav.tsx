import Container, { ContainerType } from './Container';
import Logo from './Logo';

export default function Nav() {
  return (
    <header>
      <Container className="flex justify-center mt-8" type={ContainerType.WIDE}>
        <Logo />
      </Container>
    </header>
  );
}

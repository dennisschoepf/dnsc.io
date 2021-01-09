import Container, { ContainerType } from './Container';
import Logo from './Logo';

export default function Nav() {
  return (
    <header>
      <Container className="flex justify-center" type={ContainerType.WIDE}>
        <Logo />
      </Container>
    </header>
  );
}

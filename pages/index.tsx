import Container, { ContainerType } from '../components/Container';
import { lang } from '../content/lang';

export default function IndexPage() {
  return (
    <section id="hero">
      <Container type={ContainerType.SMALL} className="pt-36">
        <h1 className="mb-6 text-5xl lg:text-7xl text-white font-bold">
          {lang.hero.title[0]}{' '}
          <span className="text-gradient">{lang.hero.title[1]}</span>,
        </h1>
        <p className="text-2xl text-white">{lang.hero.introText[0]}</p>
      </Container>
    </section>
  );
}

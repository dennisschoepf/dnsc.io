import { useLang } from '../hooks/useLang';
import Button from './Button';
import Container, { ContainerType } from './Container';

export default function Footer() {
  const { footer } = useLang();

  return (
    <footer className="text-white mt-32">
      <Container type={ContainerType.SMALL}>
        <p className="mb-4 text-2xl lg:mb-6 lg:text-4xl">
          {footer.contactText}
        </p>
        <Button href={footer.button.link} as="a">
          {footer.button.text}
        </Button>
        <p className="text-gray-400 text-right text-lg mt-16">
          {footer.copyright}, {new Date().getFullYear()} <br />
          {footer.footerText} <br />
          {footer.builtWith}{' '}
          <a
            className="border-b-2 border-gray-400 hover:text-white"
            target="_blank"
            href={footer.githubLink}
          >
            Github
          </a>
        </p>
      </Container>
    </footer>
  );
}

import { Fragment } from 'react';
import Link from 'next/link';
import Container, { ContainerType } from '../components/Container';
import Icon from '../components/Icon';
import DocumentTitle from '../components/DocumentTitle';
import { useLang } from '../hooks/useLang';

export default function IndexPage() {
  const { index } = useLang();

  return (
    <Fragment>
      <DocumentTitle title={index.documentTitle} />
      <main>
        <section id="index">
          <Container type={ContainerType.SMALL} className="pt-36">
            <h1 className="mb-8 text-5xl lg:text-7xl text-white font-bold">
              <span className="text-gradient">{index.title[0]}</span>{' '}
              {index.title[1]},
            </h1>
            <p className="text-2xl text-white leading-normal">
              {index.introText[0]}{' '}
              {index.introLinks.map((introLink, i) => [
                <Link href={introLink.href} key={introLink.text}>
                  <a className="border-b-2 border-gray-500 hover:border-white">
                    {introLink.text}
                  </a>
                </Link>,
                i === index.introLinks.length - 1 ? '.' : ', ',
              ])}
            </p>
            <p className="text-2xl text-white leading-normal mt-8">
              {index.introText[1]}
            </p>
            <ul className="flex mt-2">
              {index.contactLinks.map((contactLink) => (
                <li className="mr-4" key={contactLink.href}>
                  <Link href={contactLink.href}>
                    <a target="_blank">
                      <Icon icon={contactLink.icon} color="#ffffff" size={35} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
        <section id="project-preview">
          <Container type={ContainerType.SMALL}>
            <h2 className="text-5xl lg:text-8xl uppercase tracking-wide text-right text-gray-800 font-bold mt-0 mb-4">
              {index.showcase.title}
            </h2>
            <p>Coming Soon ...</p>
          </Container>
        </section>
        <section id="site-preview">
          <Container type={ContainerType.SMALL}>
            <h2 className="text-5xl lg:text-8xl uppercase tracking-wide text-right text-gray-800 font-bold mt-0 mb-4">
              {index.teaser.title}
            </h2>
            <p>Coming Soon...</p>
          </Container>
        </section>
      </main>
    </Fragment>
  );
}

import { Fragment } from 'react';
import Link from 'next/link';
import Container, { ContainerType } from '../components/Container';
import Icon from '../components/Icon';
import { lang } from '../content/lang';
import DocumentTitle from '../components/DocumentTitle';

export default function IndexPage() {
  return (
    <Fragment>
      <DocumentTitle title={lang.index.documentTitle} />
      <main>
        <section id="index">
          <Container type={ContainerType.SMALL} className="pt-36">
            <h1 className="mb-8 text-5xl lg:text-7xl text-white font-bold">
              <span className="text-gradient">{lang.index.title[0]}</span>{' '}
              {lang.index.title[1]},
            </h1>
            <p className="text-2xl text-white leading-normal">
              {lang.index.introText[0]}{' '}
              {lang.index.introLinks.map((introLink, i) => [
                <Link href={introLink.href} key={introLink.text}>
                  <a className="border-b-2 border-gray-500 hover:border-white">
                    {introLink.text}
                  </a>
                </Link>,
                i === lang.index.introLinks.length - 1 ? '.' : ', ',
              ])}
            </p>
            <p className="text-2xl text-white leading-normal mt-8">
              {lang.index.introText[1]}
            </p>
            <ul className="flex mt-2">
              {lang.index.contactLinks.map((contactLink) => (
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
              {lang.index.showcase.title}
            </h2>
            <p>Coming Soon ...</p>
          </Container>
        </section>
        <section id="site-preview">
          <Container type={ContainerType.SMALL}>
            <h2 className="text-5xl lg:text-8xl uppercase tracking-wide text-right text-gray-800 font-bold mt-0 mb-4">
              {lang.index.teaser.title}
            </h2>
            <p>Coming Soon...</p>
          </Container>
        </section>
      </main>
    </Fragment>
  );
}

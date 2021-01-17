import { IconTypes } from '../components/Icon';

interface Link {
  href: string;
  text: string;
}

interface IconLink {
  icon: IconTypes;
  href: string;
}

interface LanguageContent {
  nav: {
    links: Link[];
  };
  index: {
    documentTitle: string;
    title: string[];
    introText: string[];
    introLinks: Link[];
    contactLinks: IconLink[];
    showcase: { title: string };
    teaser: { title: string };
  };
  footer: {
    copyright: string;
    contactText: string;
    footerText: string;
    builtWith: string;
    githubLink: string;
    button: {
      text: string;
      link: string;
    };
  };
}

export const lang: LanguageContent = {
  nav: {
    links: [
      {
        href: '/about',
        text: 'About',
      },
    ],
  },
  index: {
    documentTitle: 'Home - dnsc.io',
    title: ['Hello', 'there'],
    introText: [
      "I'm Dennis - a Human Computer Interaction Master's student and UX Developer at Digital H trying to combine my tech and design backgrounds to tackle digital projects holistically. As you're already here, feel free to take a look at:",
      'Or contact me right away:',
    ],
    introLinks: [
      { href: '/projects', text: "What I've done" },
      { href: '/about', text: 'Who I am' },
      { href: '/knowledge', text: 'My Knowledge Base' },
    ],
    contactLinks: [
      {
        icon: IconTypes.MAIL,
        href:
          'mailto:me@dnsc.io?subject=Let%27s%20discuss%21&body=Hi%20Dennis%2C%0A%0AI%20want%20to%20talk%20with%20you%20about%3A',
      },
      {
        icon: IconTypes.XING,
        href: 'https://www.xing.com/profile/Dennis_Schoepf2/cv',
      },
      {
        icon: IconTypes.LINKEDIN,
        href: 'https://www.linkedin.com/in/dennis-sch%C3%B6pf-06b335102/',
      },
    ],
    showcase: {
      title: 'Showcase',
    },
    teaser: {
      title: 'More',
    },
  },
  footer: {
    copyright: '© Dennis Schoepf',
    contactText: 'Want to start a conversation?',
    footerText: 'Standing on the shoulders of giants',
    builtWith: 'Built with Next.js and Tailwind, code on ',
    githubLink: 'https://github.com/dennisschoepf/dnsc.io/',
    button: {
      text: 'Contact me',
      link:
        'mailto:me@dnsc.io?subject=Let%27s%20discuss%21&body=Hi%20Dennis%2C%0A%0AI%20want%20to%20talk%20with%20you%20about%3A',
    },
  },
};

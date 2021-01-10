interface LanguageContent {
  hero: {
    title: string[];
    introText: string[];
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
  hero: {
    title: ["Hi I'm", 'Dennis'],
    introText: [
      "a Human Computer Interaction Master's student and UX Developer at Digital H trying to combine my IT, business and design backgrounds to tackle software projects holistically.",
    ],
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

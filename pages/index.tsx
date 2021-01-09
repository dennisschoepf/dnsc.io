import { lang } from '../content/lang';

export default function IndexPage() {
  return (
    <h1 className="pt-24 text-4xl md:text-5xl uppercase text-white font-bold text-center">
      {lang.hero.title}
    </h1>
  );
}

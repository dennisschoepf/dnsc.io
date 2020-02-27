import Link from 'next/link';

export default ({ children, href }) => (
  <Link href={href}>
    <a className="relative text-hover-effect">
      <span className="text-hover-effect-text relative z-20 text-teal-500 font-bold">{children}</span>
      <span className="text-hover-effect-bg absolute bg-teal-500 shadow-lg rounded -my-2 -mx-4 top-0 right-0 left-0 bottom-0"></span>
    </a>
  </Link>
);
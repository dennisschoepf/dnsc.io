import Link from 'next/link';

export default ({ children, href }) => (
  <Link href={href}>
    <a className="font-bold text-underline">{children}</a>
  </Link>
);

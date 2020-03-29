import Link from 'next/link';

export default ({ children, href }) => (
  <Link href={href}>
    <a className="font-bold hover:underline hover:text-red-500">{children}</a>
  </Link>
);

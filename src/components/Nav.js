import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function Nav() {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <div
      className={`flex flex-row font-bold text-xl md:text-2xl tracking-wide uppercase ${
        isIndexPage ? 'justify-center' : 'justify-between'
      }`}
    >
      <Link href="/">
        <a className="m-4 lg:m-6">{!isIndexPage && <span>&larr;</span>} dnsc</a>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function Nav() {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <div
      className={`flex flex-row font-bold text-2xl bg-black tracking-wide uppercase justify-center tracking-wider`}
    >
      <Link href="/">
        <a className="leading-7 relative m-4 lg:m-6">
          <span className="relative px-1 z-10">dnsc</span>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-white w-full h-full"
            style={{ transform: 'rotate(-13deg)' }}
          ></div>
        </a>
      </Link>
    </div>
  );
}

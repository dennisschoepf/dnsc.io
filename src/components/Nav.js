import Link from 'next/link';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';
  const isAboutPage = router.pathname === '/about';

  return (
    <div className="m-2 md:m-4 flex flex-row justify-between font-bold text-lg md:text-xl tracking-wide uppercase">
      <Link href="/">
        <a className="py-2 px-4">{!isIndexPage && <span>&larr;</span>} dnsc</a>
      </Link>
      <Link href="/about">
        <a className="py-2 px-4">About {!isAboutPage && <span>&rarr;</span>}</a>
      </Link>
    </div>
  );
};

import Link from 'next/link';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <div className="container mx-auto my-2 md:my-4 flex flex-row justify-between font-bold text-lg md:text-xl tracking-wide uppercase">
      <Link href="/">
        <a className="py-2 px-4">{!isIndexPage && <span>&larr;</span>} dnsc</a>
      </Link>
    </div>
  );
};

import Link from 'next/link';

export default () => (
  <div className="container mx-auto my-2 md:my-4 flex flex-row justify-between font-bold text-lg md:text-xl tracking-wide uppercase">
    <Link href="/"><a className="py-2 px-4">Dennis Schoepf</a></Link>
    <Link href="/about">
      <a className="py-2 px-4 hover:bg-teal-600 hover:text-white hover:shadow-lg rounded">About</a>
    </Link>
  </div>
)
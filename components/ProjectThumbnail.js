import Link from "next/link";

export default ({ children, href, as, featured }) => (
  <Link href={href} as={as}>
    <a>
      <div
        className={`rounded-lg text-center py-12 bg-black text-white${
          featured ? " lg:col-span-2" : ""
        }`}
      >
        {children}
      </div>
    </a>
  </Link>
);

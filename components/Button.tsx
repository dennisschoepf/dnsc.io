import { ReactNode } from 'react';

interface ButtonProps {
  as: 'a' | 'button';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

const buttonClasses =
  'custom-button inline-block relative text-lg bg-transparent';

function ButtonContent({ children }) {
  return (
    <span className="relative z-10 block width-f height-f text-white bg-black border-2 border-white px-8 py-2 transform hover:translate-x-1 hover:translate-y-1 transition">
      {children}
    </span>
  );
}

export default function Button({ as, href, children, onClick }: ButtonProps) {
  if (as === 'a') {
    return (
      <a className={buttonClasses} href={href}>
        <ButtonContent>{children}</ButtonContent>
      </a>
    );
  } else if (as === 'button') {
    return (
      <button className={buttonClasses} onClick={onClick}>
        <ButtonContent>{children}</ButtonContent>
      </button>
    );
  }
}

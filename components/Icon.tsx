export enum IconTypes {
  GITHUB = 'GITHUB',
  XING = 'XING',
  LINKEDIN = 'LINKEDIN',
  MAIL = 'MAIL',
}

export interface IconProps {
  color: string;
  size: number;
  icon: IconTypes;
}

export default function Icon({ color, size, icon }: IconProps) {
  if (icon === IconTypes.XING) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={`${size}px`}
        width={`${size}px`}
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M20.462 3.23c.153 0 .307.078.384.155a.49.49 0 010 .461l-6.077 10.77 3.846 7.076a.49.49 0 010 .462.588.588 0 01-.384.154h-2.77c-.384 0-.615-.308-.769-.539l-3.923-7.154C11 14.308 16.923 3.77 16.923 3.77c.154-.307.385-.538.77-.538h2.769zM8.923 7c.385 0 .615.308.77.538l1.922 3.308c-.153.154-3 5.23-3 5.23-.153.232-.384.54-.769.54H5.154a.588.588 0 01-.385-.154.49.49 0 010-.462l2.846-5.154-1.846-3.23a.49.49 0 010-.462A.588.588 0 016.154 7h2.77z"
        />
      </svg>
    );
  }
  if (icon === IconTypes.MAIL) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={`${size}px`}
        width={`${size}px`}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M2.243 6.854L11.49 1.31a1 1 0 011.029 0l9.238 5.545a.5.5 0 01.243.429V20a1 1 0 01-1 1H3a1 1 0 01-1-1V7.283a.5.5 0 01.243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z"
        />
      </svg>
    );
  }
  if (icon === IconTypes.LINKEDIN) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={`${size}px`}
        width={`${size}px`}
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
        />
      </svg>
    );
  }
  return <div>Error: No IconType selected.</div>;
}

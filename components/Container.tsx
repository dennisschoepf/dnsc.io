export enum ContainerType {
  FULL = 'FULL',
  WIDE = 'WIDE',
  SMALL = 'SMALL',
}

interface ContainerProps {
  type: ContainerType;
  className: string;
  children: React.ReactNode;
}

function getContainerClasses(
  type: ContainerType,
  otherClasses: string
): string {
  if (type === ContainerType.FULL) return `${otherClasses} w-full`;
  if (type === ContainerType.WIDE) return `${otherClasses} max-w-screen-2xl`;
  if (type === ContainerType.SMALL) return `${otherClasses} max-w-screen-md`;
}

export default function Container({ type, className, children }: ContainerProps) {
  return (
    <div className={getContainerClasses(type, `${className} mx-auto p-6`)}>{children}</div>
  );
}

export enum ContainerType {
  FULL = 'FULL',
  WIDE = 'WIDE',
  SMALL = 'SMALL',
}

function getContainerClasses(
  type: ContainerType,
  otherClasses: string
): string {
  if (ContainerType.FULL) return `${otherClasses} w-full`;
  if (ContainerType.WIDE) return `${otherClasses} max-w-screen-2xl`;
  if (ContainerType.SMALL) return `${otherClasses} max-w-screen-md`;
}

export default function Container({ type, children }) {
  return (
    <div className={getContainerClasses(type, 'mx-auto p-6')}>{children}</div>
  );
}

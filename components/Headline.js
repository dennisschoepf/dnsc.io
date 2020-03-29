import StyledLink from './StyledLink';

export default ({ children, className }) => (
  <h1 className={`text-4xl font-bold leading-tight mb-4 ${className}`}>
    {children}
  </h1>
);

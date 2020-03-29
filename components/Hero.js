import StyledLink from './StyledLink';
import Headline from './Headline';
import Paragraph from './Paragraph';
import Container from './Container';

export default ({ headline, children, reducedMt }) => (
  <Container className={`mt-16 md:mt-32 text-center`}>
    <Headline>{headline}</Headline>
    <div className="mx-auto lg:w-6/12">{children}</div>
  </Container>
);

import StyledLink from './StyledLink';
import Headline from './Headline';
import Paragraph from './Paragraph';
import Container from './Container';

export default ({ headline, children, reducedMt }) => (
  <Container className={`mt-16 md:mt-48`}>
    <Headline>{headline}</Headline>
    <div className="lg:w-4/12">{children}</div>
  </Container>
);

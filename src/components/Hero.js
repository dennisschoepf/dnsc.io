import StyledLink from './StyledLink';
import Headline from './Headline';
import Paragraph from './Paragraph';
import Container from './Container';

export default ({ headline, children, reducedMt }) => (
  <div className="bg-black">
    <Container className="pt-16 pb-24 px-4 text-4xl text-white font-bold leading-snug">
      <div className="lg:w-4/12">{children}</div>
    </Container>
  </div>
);

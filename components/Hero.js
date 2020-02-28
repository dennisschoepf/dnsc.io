import StyledLink from "./StyledLink";
import Headline from './Headline';
import Paragraph from './Paragraph';

export default () => (
  <div className="container mx-auto p-4 mt-40 sm:mt-56 text-center">
    <Headline>Hello there</Headline>
    <div className="mx-auto md:w-10/12 lg:w-8/12">
      <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <StyledLink href="/about">nonumy</StyledLink> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Paragraph>
    </div>
  </div>
);
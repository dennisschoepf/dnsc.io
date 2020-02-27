import StyledLink from "./StyledLink";


export default () => (
  <div className="container mx-auto p-4 mt-40 sm:mt-56 text-center">
    <h1 className="text-4xl sm:text-5xl font-bold">Hello there</h1>
    <p className="text-lg sm:text-xl md:w-10/12 lg:w-8/12 md:mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <StyledLink href="/about">nonumy</StyledLink> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
  </div>
);
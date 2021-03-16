import styled from 'styled-components';
import Logo from './Logo';
import Title from './Title';

const HeroContainer = styled.section`
  margin: ${({ theme }) =>
    `${theme.sizes.xxl} ${theme.sizes.md} ${theme.sizes.md}`};
  display: flex;
  flex-direction: column;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <Logo size={86} />
      <Title>UNDER CONSTRUCTION.</Title>
    </HeroContainer>
  );
}

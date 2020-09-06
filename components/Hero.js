import React from 'react';
import styled from 'styled-components';
import Spacer from './Spacer';
import { useSizes } from '../hooks/useTheme';
import Container from './Container';

const HeroContainer = styled.section`
  padding: ${(props) => props.theme.sizes.xxxl} 0;
  background-color: ${(props) => props.theme.colors.black};
`;

export default function Hero({ children }) {
  const sizes = useSizes();

  return (
    <HeroContainer id="hero">
      <Container>
        {children}
        <Spacer size={sizes.l} />
      </Container>
    </HeroContainer>
  );
}

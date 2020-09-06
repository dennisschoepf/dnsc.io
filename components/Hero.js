import React from 'react';
import styled from 'styled-components';
import Spacer from './Spacer';
import { useSizes } from '../hooks/useTheme';

const HeroContainer = styled.section`
  padding: ${(props) => props.theme.sizes.xxxl}
    ${(props) => props.theme.sizes.m};
  background-color: ${(props) => props.theme.colors.black};
`;

export default function Hero({ children }) {
  const sizes = useSizes();

  return (
    <HeroContainer id="hero">
      {children}
      <Spacer size={sizes.l} />
    </HeroContainer>
  );
}

import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.xl};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 0;
  margin: 0;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

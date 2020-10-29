import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 6.4rem;
  line-height: 105%;
  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
  padding: 0;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

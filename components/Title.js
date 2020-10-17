import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.xl};
  line-height: calc(${props => props.theme.sizes.xl} + 0.8rem);
  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: ${(props) => `${props.theme.sizes.xxl} 0 ${props.theme.sizes.xl}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

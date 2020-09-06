import React from 'react'
import styled from 'styled-components'

const StyledSpacer = styled.div`
  height: ${props => props.size};
  width: 100%;
  display: block;
`;

export default function Spacer({ size }) {
  return <StyledSpacer size={size} />
}

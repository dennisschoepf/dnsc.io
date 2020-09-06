import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.sizes.m};

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
  }
`;

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

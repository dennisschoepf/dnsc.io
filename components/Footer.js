import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.sizes.xl} 0;
  margin-top: ${(props) => props.theme.sizes.xl};
`;

export default function Footer() {
  return (
    <FooterContainer>
      © Dennis Schoepf {new Date().getFullYear()}
    </FooterContainer>
  );
}

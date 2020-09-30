import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.2rem 0.3rem;
  transform: rotate(-12deg);
`;

const LogoFont = styled.a`
  display: block;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.black};
  transform: rotate(12deg);
`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/" as="/">
        <LogoFont>DNSC</LogoFont>
      </Link>
    </LogoContainer>
  );
}

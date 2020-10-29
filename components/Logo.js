import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import media from 'styled-media-query';

const LogoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.2rem 0.3rem;
  transform: rotate(-12deg);

  &:hover {
    cursor: pointer;
  }
`;

const LogoFont = styled.a`
  display: block;
  font-family: ${(props) => props.theme.font};
  font-weight: 700;
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors.black};
  transform: rotate(12deg);

  ${media.greaterThan('medium')`
    font-size: 3.2rem;
  `}
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

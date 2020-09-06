import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const NavContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Logo />
    </NavContainer>
  );
}

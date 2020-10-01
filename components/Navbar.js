import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Logo from './Logo';

const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;

  & > *:first-child {
    margin-left: ${(props) => props.theme.sizes.xs};
  }

  &:hover {
    cursor: pointer;
  }

  ${media.greaterThan('medium')`
    justify-content: center;
    margin-top: ${(props) => props.theme.sizes.m};
    margin-bottom: ${(props) => props.theme.sizes.xl};
  `}
`;

const NavItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.sizes.s};

  ${media.greaterThan('medium')`
    display: flex;
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.sizes.s};
  `}
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid
    ${(props) => (props.active ? props.theme.colors.white : 'transparent')};
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
  margin: ${(props) => props.theme.sizes.xs};
`;

const MobileMenu = styled.menu`
  text-align: center;
  border-left: 1px solid ${(props) => props.theme.colors.grey};
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};

  &:hover {
    cursor: pointer;
  }

  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
        <MobileMenu onClick={() => setMenuOpen(!menuOpen)}>Menu</MobileMenu>
      </LogoContainer>
      <NavItemsContainer menuOpen={menuOpen}>
        <Link href="/" passHref>
          <NavItem active={currentRoute === '/'}>Home</NavItem>
        </Link>
        <Link href="/projects" passHref>
          <NavItem active={currentRoute === '/projects'}>Projects</NavItem>
        </Link>
        <Link href="/thoughts" passHref>
          <NavItem active={currentRoute === '/thoughts'}>Thoughts</NavItem>
        </Link>
        <Link href="/collections" passHref>
          <NavItem active={currentRoute === '/collections'}>
            Collections
          </NavItem>
        </Link>
        <Link href="/creative" passHref>
          <NavItem active={currentRoute === '/creative'}>Creative</NavItem>
        </Link>
        <Link href="/about" passHref>
          <NavItem active={currentRoute === '/about'}>About</NavItem>
        </Link>
      </NavItemsContainer>
    </NavContainer>
  );
}

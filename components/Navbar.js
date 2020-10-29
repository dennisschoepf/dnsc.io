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
  padding: ${(props) => props.theme.sizes.m};

  ${media.greaterThan('medium')`
    padding: ${(props) => props.theme.sizes.l} ${(props) =>
    props.theme.sizes.m};
  `}
`;

const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  ${media.greaterThan('medium')`
    max-width: 76.8rem;
    margin: 0 auto;
  `}
`;

const NavItem = styled.li`
  display: block;

  ${media.lessThan('medium')`
    display: ${(props) => (props.menuOpen ? 'block' : 'none')};
    width: 100%;
    padding: ${(props) => props.theme.sizes.s} 0;
    text-align: center;
    order: 4;
  `}
`;

const NavItemLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid
    ${(props) => (props.active ? props.theme.colors.white : 'transparent')};
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
  margin: ${(props) => props.theme.sizes.xs};

  ${media.greaterThan('medium')`
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.white};
      }
  `}
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
      <NavItemsContainer>
        <NavItem menuOpen={menuOpen}>
          <Link href="/work" passHref>
            <NavItemLink active={currentRoute === '/work'}>Work</NavItemLink>
          </Link>
        </NavItem>
        <NavItem menuOpen={menuOpen}>
          <Link href="/thoughts" passHref>
            <NavItemLink active={currentRoute === '/thoughts'}>
              Thoughts
            </NavItemLink>
          </Link>
        </NavItem>
        <li>
          <Logo />
        </li>
        <NavItem menuOpen={menuOpen}>
          <Link href="/collections" passHref>
            <NavItemLink active={currentRoute === 'collections'}>
              Collections
            </NavItemLink>
          </Link>
        </NavItem>
        <NavItem menuOpen={menuOpen}>
          <Link href="/about" passHref>
            <NavItemLink active={currentRoute === '/about'}>About</NavItemLink>
          </Link>
        </NavItem>
        <MobileMenu onClick={() => setMenuOpen(!menuOpen)}>Menu</MobileMenu>
      </NavItemsContainer>
    </NavContainer>
  );
}

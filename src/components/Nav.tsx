import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.sizes.md};
  display: flex;
  justify-content: space-between;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

const MenuButton = styled.button`
  font-size: ${({ theme }) => theme.sizes.md};
  border: 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.md};
  margin: 0;
`;

const Circle = styled.span`
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.foreground};
`;

export default function Nav() {
  return (
    <HeaderContainer>
      <Title>DNSC</Title>
      <NavContainer>
        <MenuButton>
          <Circle />
        </MenuButton>
      </NavContainer>
    </HeaderContainer>
  );
}

import styled from 'styled-components';
import Logo from './Logo';

const NavContainer = styled.header`
  padding: ${({ theme }) => theme.sizes.sm};
  display: flex;
  justify-content: space-between;
`;

export default function Nav() {
  return (
    <NavContainer>
      <Logo />
    </NavContainer>
  );
}

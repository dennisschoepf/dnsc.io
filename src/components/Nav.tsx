import styled from 'styled-components';
import { useThemeSelector } from '../context/theme-selector';

const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.sizes.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
`;

const Circle = styled.button`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.foreground};
  margin-right: ${({ theme }) => theme.sizes.xs};

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default function Nav() {
  const { toggleTheme } = useThemeSelector();

  return (
    <HeaderContainer>
      <Title>DNSC</Title>
      <Circle onClick={toggleTheme} />
    </HeaderContainer>
  );
}

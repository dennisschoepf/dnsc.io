import styled from 'styled-components';

const LogoBackground = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.foreground};
  width: 6rem;
  height: 2.2rem;
  transform: rotate(-12deg);
`;

const LogoText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.sizes.lg};
  transform: translate(-50%, -50%) rotate(12deg);
`;

export default function Logo() {
  return (
    <LogoBackground>
      <LogoText>DNSC</LogoText>
    </LogoBackground>
  );
}

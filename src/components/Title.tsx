import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground};
`;

export default function Title({ children }) {
  return <StyledH1>{children}</StyledH1>;
}

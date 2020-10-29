import styled from 'styled-components';

const ButtonText = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.xl};
`;

const StyledButton = styled.button`
  position: relative;
  z-index: 1;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-family: ${(props) => props.theme.font};
  background-color: transparent;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:hover ${ButtonText},&:active ${ButtonText} {
    transform: translate(4px, 4px);
    transition: 0.2s all ease-out;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    transform: translate(4px, 4px);
    background-color: ${(props) => props.theme.colors.black};
    border: 2px solid ${(props) => props.theme.colors.white};
  }
`;

export default function Button({ children }) {
  return (
    <StyledButton>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

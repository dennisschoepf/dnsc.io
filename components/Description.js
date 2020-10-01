import styled from 'styled-components';
import media from 'styled-media-query';

const StyledParagraph = styled.p`
  margin: 0 0 ${(props) => props.theme.sizes.m} 0;
  padding: 0;
  color: ${(props) => props.theme.colors.black};

  ${media.greaterThan('medium')`
    margin: 0 0 ${(props) => props.theme.sizes.xl} 0;
  `}
`;

export default function Description({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

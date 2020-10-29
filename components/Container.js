import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.black};
  padding: ${(props) =>
    `${props.noYPadding ? '0' : props.theme.sizes.xl} ${props.theme.sizes.m}`};
  width: 100%;

  ${media.greaterThan('medium')`
    padding-top: ${(props) =>
      props.noYPadding ? '0' : props.theme.sizes.xxxl};
    padding-bottom: ${(props) =>
      props.noYPadding ? '0' : props.theme.sizes.xxxl};
    margin: 0 auto;
    max-width: 100%;
  `}
`;

const InnerWrapper = styled.div`
  ${media.greaterThan('medium')`
    max-width: 76.8rem;
    margin: 0 auto;
  `}
`;

export default function Container({ children, noYPadding, bgColor }) {
  return (
    <Wrapper noYPadding={noYPadding} bgColor={bgColor}>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
}

import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.white};
  padding: ${(props) =>
    `${props.noYPadding ? '0' : props.theme.sizes.m} ${props.theme.sizes.m}`};

  ${media.greaterThan('medium')`
    padding-top: ${(props) => (props.noYPadding ? '0' : props.theme.sizes.xl)};
    padding-bottom: ${(props) =>
      props.noYPadding ? '0' : props.theme.sizes.xl};
    margin: 0 auto;
    max-width: 768px;
  `}
`;

export default function Container({ children, noYPadding, bgColor }) {
  return (
    <Wrapper noYPadding={noYPadding} bgColor={bgColor}>
      {children}
    </Wrapper>
  );
}

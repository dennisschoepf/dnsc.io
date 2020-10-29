import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Container from '../components/Container';
import { useColors } from '../hooks/useTheme';
import Button from './Button';

const FooterFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FooterContactHeadline = styled.h3`
  width: 50%;
  margin-right: 50%;
  margin-bottom: ${(props) => props.theme.sizes.xxl};
  font-size: ${(props) => props.theme.sizes.xxl};
  line-height: 120%;
  color: ${(props) => props.theme.colors.white};

  ${media.lessThan('medium')`
    margin-right: 0;
    width: 100%;
    text-align: center;
  `}

  ${media.lessThan('350px')`
    font-size: ${(props) => props.theme.sizes.xl};
  `}
`;

const FooterContactButton = styled.div`
  width: 50%;

  ${media.lessThan('medium')`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.sizes.xxxl};
  `}
`;

const FooterLegal = styled.small`
  width: 50%;
  color: ${(props) => props.theme.colors.grey};
  text-align: right;

  ${media.lessThan('medium')`
    width: 100%;
    text-align: center;
  `}

  ${media.lessThan('350px')`
    font-size: ${(props) => props.theme.sizes.m};
  `}
`;

export default function Footer() {
  const colors = useColors();

  return (
    <Container>
      <FooterFlexContainer>
        <FooterContactHeadline>
          Want to start a conversation?
        </FooterContactHeadline>
        <FooterContactButton>
          <Button
            as="a"
            href="mailto:me@dnsc.io?subject=Let%27s%20discuss%21&body=Hi%20Dennis%2C%0A%0AI%20want%20to%20talk%20with%20you%20about%3A"
          >
            Contact me
          </Button>
        </FooterContactButton>
        <FooterLegal>
          © Dennis Schoepf {new Date().getFullYear()}
          <br />
          Standing on the shoulders of giants.
          <br />
          Built with next.js, code on Github.
        </FooterLegal>
      </FooterFlexContainer>
    </Container>
  );
}

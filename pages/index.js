import { Fragment } from 'react';
import styled, { useTheme } from 'styled-components';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Shape, { shapes } from '../components/Shape';
import Container from '../components/Container';

const BigFontContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0 0;
`;

const BigFont = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.xl};
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 0;
  margin: 0 1rem 0 0;
`;

export default function Home() {
  const theme = useTheme();

  return (
    <Fragment>
      <Hero>
        <Title>Hi, I'm Dennis.</Title>
        <BigFontContainer>
          <BigFont>Student</BigFont>
          <Shape
            size={theme.sizes.m}
            color={theme.colors.yellow}
            shape={shapes.CIRCLE}
          />
        </BigFontContainer>
        <BigFontContainer>
          <BigFont>Developer</BigFont>
          <Shape
            size={theme.sizes.m}
            color={theme.colors.blue}
            shape={shapes.SQUARE}
          />
        </BigFontContainer>
        <BigFontContainer>
          <BigFont>Designer</BigFont>
          <Shape
            size={theme.sizes.m}
            color={theme.colors.red}
            shape={shapes.TRIANGLE}
          />
        </BigFontContainer>
      </Hero>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        Coming soon ...
      </div>
    </Fragment>
  );
}

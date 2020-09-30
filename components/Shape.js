import React from 'react';
import styled from 'styled-components';

export const shapes = {
  TRIANGLE: 'TRIANGLE',
  CIRCLE: 'CIRCLE',
  SQUARE: 'SQUARE',
};

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: ${(props) => props.size} solid ${(props) => props.color};
  border-left: calc(${(props) => props.size} / 1.8) solid transparent;
  border-right: calc(${(props) => props.size} / 1.8) solid transparent;
`;

const Circle = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Square = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color};
`;

export default function Shape({ size, color, shape }) {
  if (!shape) return;
  if (shape === shapes.TRIANGLE) return <Triangle size={size} color={color} />;
  if (shape === shapes.CIRCLE) return <Circle size={size} color={color} />;
  if (shape === shapes.SQUARE) return <Square size={size} color={color} />;
}

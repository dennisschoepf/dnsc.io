import React from 'react';
import styled from 'styled-components';

export const shapes = {
  TRIANGLE: 'TRIANGLE',
  CIRCLE: 'CIRCLE',
  SQUARE: 'SQUARE',
};

const Triangle = styled.div`
  margin-left: ${(props) => props.ml};
  width: 0;
  height: 0;
  border-bottom: ${(props) => props.size || '1.2rem'} solid
    ${(props) => props.color};
  border-left: calc(${(props) => props.size || '1.2rem'} / 1.8) solid
    transparent;
  border-right: calc(${(props) => props.size || '1.2rem'} / 1.8) solid
    transparent;
`;

const Circle = styled.div`
  margin-left: ${(props) => props.ml};
  width: ${(props) => props.size || '1.2rem'};
  height: ${(props) => props.size || '1.2rem'};
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Square = styled.div`
  margin-left: ${(props) => props.ml};
  width: ${(props) => props.size || '1.2rem'};
  height: ${(props) => props.size || '1.2rem'};
  background-color: ${(props) => props.color};
`;

export default function Shape({ size, color, shape, ml }) {
  if (!shape) return null;
  if (shape === shapes.TRIANGLE)
    return <Triangle ml={ml} size={size} color={color} />;
  if (shape === shapes.CIRCLE)
    return <Circle ml={ml} size={size} color={color} />;
  if (shape === shapes.SQUARE)
    return <Square ml={ml} size={size} color={color} />;
}

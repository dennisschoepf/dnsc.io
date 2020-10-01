import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const AccordionContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.sizes.m};
  }
`;

export default function Accordion({ items }) {
  return (
    <AccordionContainer>
      {items.map((item) => (
        <AccordionItem
          key={item.summary}
          summaryText={item.summary}
          detailComponent={item.detail}
        />
      ))}
    </AccordionContainer>
  );
}

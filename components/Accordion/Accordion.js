import React from 'react';
import AccordionItem from './AccordionItem';

export default function Accordion({ items }) {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          summaryText={item.summary}
          detailComponent={item.detail}
        />
      ))}
    </div>
  );
}

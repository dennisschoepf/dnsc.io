import Container from '../components/Container';
import Hero from '../components/Hero';
import Paragraph from '../components/Paragraph';
import Filters from '../components/Filters';
import collection from '../data/canon/collection.json';
import { useState } from 'react';
import CanonThumbnail from '../components/CanonThumbnail';

export default () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const itemsToShow =
    selectedFilters.length !== 0
      ? collection.items.filter(item =>
          item.topics.some(topic => selectedFilters.indexOf(topic) >= 0)
        )
      : collection.items;

  return (
    <Container>
      <Hero headline="My personal canon" reducedMt>
        <Paragraph>
          These are the pieces of content, knowledge, inspiration, tools or
          collections I find myself returning to and referencing often. All of
          it influences how I think, act and approach things.
        </Paragraph>
      </Hero>
      <Filters
        filters={collection.topics}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className="mt-24 grid gap-4 grid-eq-height grid-cos-1 md:grid-cols-2 lg:grid-cols-3">
        {itemsToShow.map(item => (
          <CanonThumbnail key={item.headline} {...item} />
        ))}
      </div>
    </Container>
  );
};

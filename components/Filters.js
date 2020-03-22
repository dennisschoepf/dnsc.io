import Container from './Container';

const Filters = ({ filters, selectedFilters, setSelectedFilters }) => {
  const toggleFilters = filter => {
    if (selectedFilters.some(selectedFilter => selectedFilter === filter)) {
      setSelectedFilters(
        selectedFilters.filter(selectedFilter => selectedFilter !== filter)
      );
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div
      className={`mt-16 grid grid-cols-2 gap-4 lg:grid-cols-${filters.length}`}
    >
      {filters.map(filter => (
        <div
          key={filter}
          className={`flex align-center justify-center py-2 border-2 border-black rounded hover:shadow-md cursor-pointer ${selectedFilters.some(
            selectedFilter => selectedFilter === filter
          ) && 'bg-black text-white'}`}
          onClick={() => toggleFilters(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default Filters;

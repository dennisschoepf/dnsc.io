const CanonThumbnail = ({ headline, description, href, topics }) => (
  <a
    className="group flex flex-col border-2 border-black rounded hover:shadow-md"
    href={href}
    target="_blank"
  >
    <h3 className="text-white bg-black p-4 text-xl font-bold underline group-hover:bg-teal-600">
      {headline}
    </h3>
    <p className="m-0 p-4 flex-grow">{description}</p>
    <div className="p-4 pt-0 flex justify-start flex-wrap">
      {topics.map(topic => (
        <span key={topic} className="px-2 bg-gray-400 rounded mr-2 last:mr-0">
          {topic}
        </span>
      ))}
    </div>
  </a>
);

export default CanonThumbnail;

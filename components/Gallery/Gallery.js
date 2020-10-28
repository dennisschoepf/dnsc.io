import GalleryItem from './GalleryItem';

export default function Gallery({ galleryItems }) {
  return (
    <ul>
      {galleryItems.map(({ title, category, path, thumbnailPath }) => (
        <GalleryItem
          key={path}
          title={title}
          category={category}
          path={path}
          thumbnailPath={thumbnailPath}
        />
      ))}
    </ul>
  );
}

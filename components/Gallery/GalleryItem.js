import styled from 'styled-components';

const GalleryItemContainer = styled.li`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const GalleryItemTitle = styled.h3`
  padding: ${(props) => props.theme.sizes.xxs}
    ${(props) => props.theme.sizes.xs};
  font-weight: 700;
`;

const GalleryItemImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius};
`;

export default function GalleryItem({ title, category, path, thumbnailPath }) {
  return (
    <GalleryItemContainer>
      <GalleryItemTitle>{title}</GalleryItemTitle>
      <GalleryItemImage src={thumbnailPath} />
    </GalleryItemContainer>
  );
}

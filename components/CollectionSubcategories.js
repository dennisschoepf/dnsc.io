import Link from 'next/link';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.sizes.s} 0;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.sizes.m};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
`;

export default function CollectionSubcategories({ subcategories }) {
  return (
    <CategoryWrapper>
      {subcategories.map(({ path, name }) => (
        <Link key={name} href={path} passHref>
          <StyledLink>{name}</StyledLink>
        </Link>
      ))}
    </CategoryWrapper>
  );
}

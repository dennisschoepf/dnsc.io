import styled from 'styled-components';

const Summary = styled.summary`
  list-style: none;
  font-weight: 700;
  font-size: ${(props) => props.theme.sizes.l};
  line-height: ${(props) => props.theme.sizes.l};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.sizes.m};
  margin: 0;
  display: flex;
  justify-content: space-between;

  &::-webkit-details-marker {
    display: none;
  }

  &:after {
    content: '+';
    color: #fff;
    font-size: ${(props) => props.theme.sizes.xl};
    font-weight: 700;
  }
`;

const Details = styled.details`
  display: flex;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.black};

  &:hover {
    cursor: pointer;
  }

  &[open] > ${Summary}:after {
    content: '-';
  }
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.sizes.s};
`;

export default function AccordionItem({ summaryText, detailComponent }) {
  return (
    <Details>
      <Summary>{summaryText}</Summary>
      <Content>{detailComponent}</Content>
    </Details>
  );
}

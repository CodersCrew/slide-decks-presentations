import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div `
  width: 100%;
  height: 100%;
  padding: 40px 80px 197px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Items = styled.div`
  text-align: center;
  width: 100%;
`;

const FunctionDescription = ({ styles, title, content, items }) => (
  <Container styles={styles} className="number-items">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.number} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

FunctionDescription.propTypes = {
  title: string,
  content: string,
  items: arrayOf(
    exact({
      number: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default FunctionDescription;

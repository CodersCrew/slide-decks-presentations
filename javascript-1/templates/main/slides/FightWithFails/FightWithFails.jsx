import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 111px 64px;
  ${props => props.styles}
`;

const Items = styled.div`
  display: block;
  width: 100%;
`;

const FightWithFails = ({ styles, title, content, items }) => (
  <Container styles={styles} className="number-items">
    <LineHeader>{title}</LineHeader>
    <BoxHeading content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.number} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

FightWithFails.propTypes = {
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

export default FightWithFails;

import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const NumberValue = styled.h2`
  min-width: 80px;
  margin: 0 auto;
  color: var(--yellow);
`;

const Title = styled.h4`
  margin: auto;
  font-size: var(--size-md);
`;

const Item = ({ number, title }) => (
  <Container className="item">
    <NumberValue className="number">{number}</NumberValue>
    <Title className="title">{title}</Title>
  </Container>
);

Item.propTypes = {
  number: string,
  title: string,
};

export default Item;

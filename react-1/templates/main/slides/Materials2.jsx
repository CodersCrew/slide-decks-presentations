import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0px 96px 0px;
`;

const Items = styled.div`
  margin-top: 255px;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

const Item = styled.div``;

const Materials2 = ({ title, items }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Items>
      {items.map(item => (
        <Item key={item.link}>
          <a href={item.link} target="_blank">
            <img src={item.image} />
          </a>
        </Item>
      ))}
    </Items>
  </Container>
);

Materials2.propTypes = {
  title: string.isRequired,
  items: arrayOf(
    exact({
      image: string,
      link: string,
    }),
  ),
};

export default Materials2;

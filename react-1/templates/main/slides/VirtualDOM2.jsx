import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-basis: 50%;

  img {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  padding: 56px 87px 382px 64px;

  > p {
    line-height: 76px;
    margin-top: 50px;

    &:nth-child(2) {
      color: var(--orange);
      font-weight: var(--bold);
    }
  }
`;

const VirtualDOM2 = ({ title, info, description, image }) => (
  <Container>
    <Left>
      <img src={image} />
    </Left>
    <Right>
      <LineHeader>{title}</LineHeader>
      <p>{info}</p>
      <p>{description}</p>
    </Right>
  </Container>
);

VirtualDOM2.propTypes = {
  title: string,
  info: string,
  description: string,
  image: string,
};

export default VirtualDOM2;

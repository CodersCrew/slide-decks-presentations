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
        object-fit: cover;
    }
`;

const Right = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    padding: 56px 87px 382px 64px;

    h3 {
        line-height: 76px;
        margin-top: 293px;
        color: var(--text-primary);
    }
`;


const Cascading1 = ({ title, description, image }) => (
  <Container>
    <Left>
        <img src={image} />
    </Left>
    <Right>
        <LineHeader>{title}</LineHeader>
        <h3>{description}</h3>
    </Right>
  </Container>
);

Cascading1.propTypes = {
  title: string,
  description: string,
  image: string,
};

export default Cascading1;
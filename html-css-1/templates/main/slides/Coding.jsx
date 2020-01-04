import styled from 'styled-components';
import { string } from 'prop-types';

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
    align-items: center;
    justify-content: center;
    flex-basis: 50%;
`;


const Coding = ({ title, image }) => (
  <Container>
    <Left>
        <img src={image} />
    </Left>
    <Right>
        <h2>{title}</h2>
    </Right>
  </Container>
);

Coding.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
};

export default Coding;
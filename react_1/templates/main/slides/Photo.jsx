import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  padding: 0 200px 0 200px;
  text-align: center;

  img {
    width: 80%;
    height: 100%;
  }
`;

const Photo = ({ image }) => (
  <Container>
    <img src={image} />
  </Container>
);

Photo.propTypes = {
  image: string.isRequired,
};

export default Photo;

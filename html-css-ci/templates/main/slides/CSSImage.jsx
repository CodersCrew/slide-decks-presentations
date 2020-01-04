import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 100%;
  }
`;


const CSSImage = ({ image }) => (
  <Container>
    <img src={image} />
  </Container>
);

CSSImage.propTypes = {
  image: string.isRequired,
};

export default CSSImage;
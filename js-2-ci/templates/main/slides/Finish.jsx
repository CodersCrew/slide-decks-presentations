import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Finish = ({ image }) => (
  <Container>
    <img src={image} />
  </Container>
);

Finish.propTypes = {
  image: string,
};

export default Finish;

import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.styles}
`;

const Image = styled.img`
  background: url('${props => props.src}') no-repeat center/contain;
`;

const Programmer = ({ image, styles }) => (
  <Container styles={styles} className="title">
    <Image src={image} className="image" />
  </Container>
);

Programmer.propTypes = {
  image: string,
  styles: arrayOf(string),
};

export default Programmer;

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
  position: relative;
  background: url('${props => props.src}') no-repeat center/cover;
  right: 200px;
  bottom: 150px;
`;

const Konkatenacja = ({ image, styles }) => (
  <Container styles={styles} className="title">
    <Image src={image} className="image" />
  </Container>
);

Konkatenacja.propTypes = {
  image: string,
  styles: arrayOf(string),
};

export default Konkatenacja;

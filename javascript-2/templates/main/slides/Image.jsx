import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 40px 80px 181px 80px;
  ${props => props.styles}
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
  background: url('${props => props.src}') no-repeat center/cover;
`;

const Image = ({ imageSrc, styles }) => (
  <Container styles={styles} className="image-description3">
    <Img src={imageSrc} className="image-link" />
  </Container>
);

Image.propTypes = {
  imageSrc: string.isRequired,
  styles: arrayOf(string),
};

export default Image;

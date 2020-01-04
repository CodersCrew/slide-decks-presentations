import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 135px 0;

  img {
    width: 40%;
    height: 70%;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const Input = ({ image, content }) => {
  return (
    <Container>
      <img src={image} />
      <h2>{content}</h2>
    </Container>
  );
};

Input.propTypes = {
  image: string,
  info: string,
};

export default Input;

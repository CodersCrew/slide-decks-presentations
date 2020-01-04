import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 100px 0;

  img {
    margin-top: 30px;
  }
`;

const Structure = ({ title, image }) => {
  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={image} />
    </Container>
  );
};

Structure.propTypes = {
  title: string.isRequired,
  image: string,
};

export default Structure;

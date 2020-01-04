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
    margin-top: 80px;
    object-fit: cover;
  }
`;

const Components = ({ title, image }) => {
  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={image} />
    </Container>
  );
};

Components.propTypes = {
  title: string.isRequired,
  image: string,
};

export default Components;

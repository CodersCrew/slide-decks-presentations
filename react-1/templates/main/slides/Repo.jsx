import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 203px 0;

  img {
    width: 50%;
    height: 60%;
    margin-top: 200px;
    margin-bottom: 300px;
  }
`;

const Content = styled.p``;

const Repo = ({ title, content, image }) => {
  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={image} />
      <Content>{content}</Content>
    </Container>
  );
};

Repo.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string,
};

export default Repo;

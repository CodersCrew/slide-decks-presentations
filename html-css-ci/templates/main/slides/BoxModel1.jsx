import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 147px 0;
`;

const Content = styled.p`
  margin-top: 43px;
  margin-bottom: 43px;
  max-width: 70%;
  text-align: center;
  line-height: 60px;
`;

const Image = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding: 0 819px 0 416px;
`;

const BoxModel1 = ({ title, content, image }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Content>{content}</Content>
    <Image><img src={image} /></Image>
  </Container>
);

BoxModel1.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default BoxModel1;
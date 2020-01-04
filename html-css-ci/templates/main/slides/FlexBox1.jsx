import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 305px 84px 304px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.p`
  margin-top: 72px;
  margin-bottom: 58px;
  text-align: center;
  line-height: 60px;
`;



const FlexBox1 = ({ title, content, image }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Content>{content}</Content>
    <img src={image} />
  </Container>
);

FlexBox1.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default FlexBox1;
import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 109px 147px 108px;
`;

const Content = styled.p`
  margin-top: 63px;
  margin-bottom: 63px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  line-height: 60px;
`;


const AboutHTML2 = ({ title, content, image }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Content>{content}</Content>
    <img src={image} />
  </Container>
);

AboutHTML2.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default AboutHTML2;
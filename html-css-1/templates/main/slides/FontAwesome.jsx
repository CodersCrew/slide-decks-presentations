import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 119px 0;
`;

const Content = styled.p`
  margin-top: 96px;
  margin-bottom: 96px;
  line-height: 60px;
`;



const FontAwesome = ({ title, content, image }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Content>{content}</Content>
    <img src={image} />
  </Container>
);

FontAwesome.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default FontAwesome;
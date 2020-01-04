import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.p`
  margin: 0;
`;

const Content = styled.a`
  margin-top: 8px;
  text-align: center;
`;

const Image = styled.img`
  widht: 50%;
`;

const Services = ({ title, content, image }) => (
  <Container className="item">
    <Title className="title">{title}</Title>
    <Image src={image} className="image" />
  </Container>
);

Services.propTypes = {
  title: string,
  content: string,
  image: string,
};

export default Services;

import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  margin: 0;
`;

const Title2 = styled.h4`
  margin: 0;
`;

const Content = styled.a`
  margin-top: 8px;
  text-align: center;
`;

const Image = styled.img `
  widht: 50%;
`

const Services = ({ title, content, image, title2 }) => (
  <Container className="item">
      <Title className="title">{title}</Title>
      <Title2 className="title2">{title2}</Title2>
      <Content className="content">{content}</Content>
      <Image src={image} className="image" />
  </Container>
);

Services.propTypes = {
  title: string,
  content: string,
  image: string,
  title2: string,
};

export default Services;

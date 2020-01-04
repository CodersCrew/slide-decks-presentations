import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h4`
  margin: 60px;
`;

const Image = styled.img`
  width: 50%;
`;
const Number = styled.p`
  color: var(--primary);
  font-family: Georgia, serif;
  position: absolute;
  top: 39%;
  left: 35%;
`;
const Subtitle = styled.p`
  position: absolute;
  color: var(--grey);
  font-weight: bold;
  top: 37%;
  left: 53%;
`;
const Describe = styled.p`
  position: absolute;
  top: 45%;
  left: 78%;
  font-size: 25px;
  font-family: Georgia, serif;
`;

const Services = ({ title, image, number, subtitle, describe }) => (
  <Container className="item">
    <Title className="title">{title}</Title>
    <Number className="number">{number}</Number>
    <Subtitle className="subtitle">{subtitle}</Subtitle>
    <Describe className="describe">{describe}</Describe>
    <Image src={image} className="image" />
  </Container>
);

Services.propTypes = {
  title: string,
  subtitle: string,
  describe: string,
  image: string,
  number: string,
};

export default Services;

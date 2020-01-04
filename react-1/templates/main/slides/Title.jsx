import styled from 'styled-components';
import { string, objectOf } from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 100px 300px 100px 300px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    line-height: 60px;
  }
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 136px;
  color: var(--primary);
`;

const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 50px;
  letter-spacing: 5px;
  color: var(--primary);
`;

const Images = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding-right: 100px;
`;

const Title = ({ title, subtitle, name, image }) => (
  <Container className="title">
    <Middle className="middle">
      <Name>{name}</Name>
      <Header className="title">{title}</Header>
      <p>{subtitle}</p>
      <Images>
        <img src={image.first} />
        <img src={image.second} style={{ height: '270px' }} />
      </Images>
    </Middle>
  </Container>
);

Title.propTypes = {
  name: string,
  title: string.isRequired,
  subtitle: string,
  image: objectOf(string),
};

export default Title;

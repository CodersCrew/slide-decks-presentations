import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 161px 529px 114px 530px;

  img {
    margin-left: 75px;
  }
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
  margin-bottom: 32px;
  font-size: var(--size-xl);
  color: var(--primary);
`;

const Name = styled.h3`
  text-transform: uppercase;
  margin-bottom: 20px;
  color: var(--primary);
`;

const Title = ({ title, subtitle, name, image }) => (
  <Container className="title">
    <Middle className="middle">
      <Name>{name}</Name>
      <Header className="title">{title}</Header>
      <p>{subtitle}</p>
      <img src={image} />
    </Middle>
  </Container>
);

Title.propTypes = {
  name: string,
  title: string.isRequired,
  subtitle: string,
  image: string,
};

export default Title;

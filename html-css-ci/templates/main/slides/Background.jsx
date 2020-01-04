import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 25%;
  padding-right: 25%;
`;

const Title = styled.div`
  line-height: 118px;
  text-align: center;
`;

const Background = ({ title }) => (
  <Container>
    <Title><h1>{title}</h1></Title>
  </Container>
);

Background.propTypes = {
  title: string.isRequired,
};

export default Background;
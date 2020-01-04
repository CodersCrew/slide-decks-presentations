import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Element = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

Element.propTypes = {
  title: string.isRequired,
};

export default Element;
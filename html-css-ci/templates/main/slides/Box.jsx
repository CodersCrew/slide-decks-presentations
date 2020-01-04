import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const Box = ({ title }) => (
  <Container>
        <h1>{title}</h1>
  </Container>
);

Box.propTypes = {
  title: string.isRequired,
};

export default Box;
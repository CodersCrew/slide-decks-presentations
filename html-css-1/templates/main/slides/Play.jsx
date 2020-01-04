import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background: #1572B6;
  border-radius: 20px;
  padding: 25px 58px 40px 58px;

  h1 {
      color: var(--white);
  }
`;


const Play = ({ title }) => (
  <Container>
      <Box>
        <h1>{title}</h1>
      </Box>
  </Container>
);

Play.propTypes = {
  title: string.isRequired,
};

export default Play;
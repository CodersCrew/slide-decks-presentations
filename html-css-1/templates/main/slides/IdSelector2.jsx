import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 206px 84px 222px 84px;
  text-align: center;

  h1 {
      margin-bottom: 136px;
      color: #FEDB62;
  }

  h2 {
      line-height: 98px;
  }
`;


const IdSelector2 = ({ info, description }) => (
  <Container>
    <h1>{info}</h1>
    <h2>{description}</h2>
  </Container>
);

IdSelector2.propTypes = {
  info: string.isRequired,
  description: string.isRequired,
};

export default IdSelector2;
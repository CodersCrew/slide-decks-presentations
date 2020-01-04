import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  justify-content: center;
  padding: 0 300px 0 300px;

  h1 {
    line-height: 118px;
  }
`;

const ChangeComponent = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

ChangeComponent.propTypes = {
  title: string.isRequired,
};

export default ChangeComponent;

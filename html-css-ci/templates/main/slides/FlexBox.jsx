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

  h1 {
    line-height: 118px;
    text-align: center;
  }
`;

const FlexBox = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

FlexBox.propTypes = {
  title: string.isRequired,
};

export default FlexBox;
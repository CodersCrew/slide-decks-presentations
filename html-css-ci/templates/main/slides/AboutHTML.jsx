import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutHTML = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

AboutHTML.propTypes = {
  title: string.isRequired,
};

export default AboutHTML;
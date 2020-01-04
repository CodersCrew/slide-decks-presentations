import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  text-align: center;
  padding: 56px 0 50px 0;
`;

const AppStructure = ({ title, image }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <img src={image} />
  </Container>
);

AppStructure.propTypes = {
  title: string,
  image: string,
};

export default AppStructure;

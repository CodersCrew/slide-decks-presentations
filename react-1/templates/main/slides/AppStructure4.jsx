import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  text-align: center;
  padding: 56px 0 100px 0;
`;

const Frame = styled.iframe`
  margin-top: 90px;
  width: 80%;
  height: 80%;
`;

const AppStructure = ({ title, sandboxId }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <Frame src={sandboxId} />
  </Container>
);

AppStructure.propTypes = {
  title: string,
  sandboxId: string,
};

export default AppStructure;

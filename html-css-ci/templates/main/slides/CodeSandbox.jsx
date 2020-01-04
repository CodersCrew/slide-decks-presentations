import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const CodeSandbox = ({ link }) => (
  <Container>
    <Frame src={link} />
  </Container>
);

CodeSandbox.propTypes = {
  link: string,
};

export default CodeSandbox;

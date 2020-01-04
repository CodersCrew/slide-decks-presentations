import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0;
  background-color: var(--global-background);
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
`;

const CodeSandbox2 = ({ sandboxId }) => (
  <Container>
    <Frame
      title="code-sandbox"
      src={sandboxId}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Container>
);

CodeSandbox2.propTypes = {
  sandboxId: string,
};

export default CodeSandbox2;

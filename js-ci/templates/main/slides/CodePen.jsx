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

const CodePen = ({ codepenId, userId }) => (
  <Container>
    <Frame
      title="code-pen"
      src={`https://codepen.io/${userId}/pen/${codepenId}?height=265`}
      codepen="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </Container>
);

CodePen.propTypes = {
  codepenId: string,
  userId: string,
};

export default CodePen;

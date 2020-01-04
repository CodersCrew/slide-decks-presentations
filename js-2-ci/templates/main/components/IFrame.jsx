import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0;
  background-color: var(--global-background);
`;

const Frame = styled.iframe`
  width: 864px;
  height: 648px;
  min-width: 864px;
  min-height: 648px;
`;

const IFrame = ({ sourceUrl }) => (
  <Container>
    <Frame src={sourceUrl} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
  </Container>
);

 IFrame.propTypes = {
  sourceUrl: string,
};

export default IFrame;

import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FirstLine = styled.h1`
  line-height: 1.25;
`;

const SecondLine = styled(FirstLine)`
  color: var(--primary);
`;

const ThirdLine = styled(FirstLine)``;

const Language = ({ firstLine, secondLine, thirdLine }) => (
  <Container>
    <FirstLine>{firstLine}</FirstLine>
    <SecondLine>{secondLine}</SecondLine>
    <ThirdLine>{thirdLine}</ThirdLine>
  </Container>
);

Language.propTypes = {
  firstLine: string.isRequired,
  secondLine: string.isRequired,
  thirdLine: string.isRequired,
};

export default Language;

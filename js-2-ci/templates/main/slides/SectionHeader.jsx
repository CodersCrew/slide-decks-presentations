import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 111px 64px;
  ${props => props.styles}
`;

const Header = styled.h1`
  color: var(--yellow);
  font-size: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SectionHeader = ({ styles, title }) => (
  <Container styles={styles} className="number-items">
    <Header className="title">{title}</Header>
  </Container>
);

SectionHeader.propTypes = {
  title: string,
  styles: arrayOf(string),
};

export default SectionHeader;

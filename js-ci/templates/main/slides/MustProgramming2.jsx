import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { Icon } from '../components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.styles}
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin-top: -80px;
`;

const Header = styled.h1`
  text-align: center;
`;
const Header2 = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

const IconItem = styled(Icon)`
  padding: 100px;
`;

const MustProgramming2 = ({ title2, title, icon, styles }) => (
  <Container styles={styles} className="title">
    <Middle className="middle">
      <Header className="title">{title}</Header>
      <IconItem src={icon} width={300} height={200} fill="var(--primary)" />
      <Header2 className="title2">{title2}</Header2>
    </Middle>
  </Container>
);

MustProgramming2.propTypes = {
  title2: string,
  title: string.isRequired,
  icon: string,
  styles: arrayOf(string),
};

export default MustProgramming2;

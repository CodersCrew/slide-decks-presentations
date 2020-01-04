import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';

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

const Image = styled.img`
  margin-top: 24px;
  text-align: center;
  color: var(--yellow);
`;

const MustProgramming = ({ title2, title, image, styles }) => (
  <Container styles={styles} className="title">
    <Middle className="middle">
      <Header className="title">{title}</Header>
      <Image src={image} className="image" />
      <Header2 className="title2">{title2}</Header2>
    </Middle>
  </Container>
);

MustProgramming.propTypes = {
  title2: string,
  title: string.isRequired,
  image: string,
  styles: arrayOf(string),
};

export default MustProgramming;

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

const Image = styled.img`
  max-width: 600px;
  max-height: 480px;
  margin-bottom: 32px;
`;

const Header = styled.h3`
  text-align: center;
  color: var(--yellow);
`;

const HeaderTwo = styled.h1`
  text-align: center;
  color: var(--yellow);
`;

const SubHeader = styled.h3`
  margin-top: 24px;
  text-align: center;
`;

const Title = ({ image, title, title2, subtitle, styles }) => (
  <Container styles={styles} className="title">
    <Middle className="middle">
      <Header className="title">{title}</Header>
      <HeaderTwo className="title2">{title2}</HeaderTwo>
      <SubHeader className="subtitle">{subtitle}</SubHeader>
      <br />
      {image && <Image src={image} className="image" />}
    </Middle>
  </Container>
);

Title.propTypes = {
  image: string,
  title2: string,
  title: string.isRequired,
  subtitle: string,
  styles: arrayOf(string),
};

export default Title;

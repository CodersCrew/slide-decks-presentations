import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { BoxHeading, LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 197px 80px;
  text-align: center;
  ${props => props.styles}
`;
const Image = styled.img`
 width: 50%;
`

const Script = ({ title, content, image, styles }) => (
  <Container styles={styles} className="projects">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading align="center" content={content}>
    <Image src={image} className="image" />
    </BoxHeading>
  </Container>
);

Script.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string,
  styles: arrayOf(string),
};

export default Script;

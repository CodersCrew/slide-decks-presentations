import styled from 'styled-components';
import { string, arrayOf, number } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 177px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Header = styled.div`
  margin: 0 auto 80px auto;
`;

const Middle = styled.div`
  ${'' /* display: flex;
  justify-content: center;
  align-content: center; */}
  margin: 5% auto;
  width: 100%;
`;

const Content = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: '${props => props.width}'px;
  height: auto;
  border-radius: 8px;
`;

const ImageDescription3 = ({ title, image, content, styles, link, width }) => (
  <Container styles={styles} className="image-description3">
    <Header>
      <LineHeader alignSelf="center">{title}</LineHeader>
    </Header>
    <Content>{content}</Content>
    <Middle className="middle">
      {link ? (
        <a href={link} target="_blank" >
          <Image src={image} className="image-link" width={width} />
        </a>
      ) : (
        <Image src={image} className="image-link" width={width} />
      )}
    </Middle>
  </Container>
);

ImageDescription3.propTypes = {
  image: string.isRequired,
  width: number,
  title: string.isRequired,
  content: string,
  link: string,
  styles: arrayOf(string),
};

export default ImageDescription3;

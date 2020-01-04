import styled from 'styled-components';
import { string, arrayOf, number } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 40px 80px 181px 80px;
  ${props => props.styles}
`;

const Header = styled.div`
  margin: 0 auto 80px auto;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  width: '${props => props.width}'px;
  height: auto;
`;

const ImageDescription3 = ({ title, image, styles, link, width }) => (
  <Container styles={styles} className="image-description3">
    <Header>
      <LineHeader alignSelf="center">{title}</LineHeader>
    </Header>
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
  link: string,
  styles: arrayOf(string),
};

export default ImageDescription3;

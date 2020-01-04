import styled from 'styled-components';
import { string, arrayOf, exact, object } from 'prop-types';
import { renderContent } from '../utils';
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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

const Image = styled.img`
  width: '${props => props.width}';
  height: auto;
  background: url('${props => props.src}') no-repeat center/cover;
  border-radius: 8px;
`;

const Link = styled.a`
  width: auto;
  height: auto;
`;
const Content = styled.div`
  text-align: center;
`;

const ImagesDescription = ({ title, images, styles, content, stylesObj }) => (
  <Container styles={styles} className="image-description3">
    <Header>
      <LineHeader alignSelf="center">{title}</LineHeader>
    </Header>
    <Content className="content" styles={stylesObj}>
      {renderContent(content)}
    </Content>
    <Middle className="middle">
      {images.map(image => (
        <Link key={image.id} href={image.link} target="_blank">
          <Image src={image.src} className="image-link" width={image.width} />
        </Link>
      ))}
    </Middle>
  </Container>
);

ImagesDescription.propTypes = {
  images: arrayOf(
    exact({
      id: string,
      src: string,
      link: string,
      width: string,
    }),
  ),
  title: string.isRequired,
  content: string.isRequired,
  styles: arrayOf(string),
  stylesObj: object,
};

export default ImagesDescription;

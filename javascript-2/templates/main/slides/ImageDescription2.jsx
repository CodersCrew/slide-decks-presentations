import styled from 'styled-components';
import { string, arrayOf, object, number, exact } from 'prop-types';
import { renderContent } from '../utils';
import { LineHeader, Shape, Rectangle } from '../components';

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
  margin-bottom: 80px;
`;

const Middle = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  width: '${props => props.width}'px;
  height: auto;
  border-radius: 8px;
`;

const Content = styled.div`
  text-align: left;
  margin-left: 64px;
  padding-top: 24px;
`;

const ImageDescription2 = ({ title, image, content, width, shapes, styles, stylesObj }) => {
  const shapeItems = shapes.map(shape =>
    shape.src ? (
      <Shape
        key={shape.number}
        src={shape.src}
        width={shape.width}
        height={shape.height}
        fill="var(--primary)"
        style={shape.style}
      />
    ) : (
      <Rectangle
        key={shape.number}
        width={shape.width}
        height={shape.height}
        fill="var(--yellow)"
        style={shape.style}
      />
    ),
  );
  return (
    <Container styles={styles} className="image-description2">
      <Header>
        <LineHeader>{title}</LineHeader>
      </Header>
      <Middle className="middle">
        <Image src={image} className="image" width={width} />
        <Content className="content" style={stylesObj}>
          {renderContent(content)}
        </Content>
        {shapeItems}
      </Middle>
    </Container>
  );
};

ImageDescription2.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  width: number,
  content: string.isRequired,
  shapes: arrayOf(
    exact({
      number: string,
      width: number,
      height: number,
      src: string,
      style: object,
    }),
  ),
  styles: arrayOf(string),
  stylesObj: object,
};

export default ImageDescription2;

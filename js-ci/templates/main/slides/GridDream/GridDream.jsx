import styled from 'styled-components';
import { string, arrayOf, exact, number, object } from 'prop-types';
import { BoxHeading, LineHeader, Shape, Rectangle } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 197px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Items = styled.div`
  text-align: center;
  width: 100%;
`;
const Content = styled.a`
  display: grid;
  border: 1px solid var(--grey);
  width: 10px;
  height: 10px;
  grid-column-gap: 0;
  grid-row-gap: 0;
`;

const Gridson = styled.div`
  display: grid;
  position: absolute;
  width: 50%;
  top: 55%;
  left: 45%;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: repeat(10, 10px);
  grid-template-rows: repeat(10, 10px);
  transform: rotate(90deg);
`;

const arr = [];
while (arr.length < 500) {
  const randomnumber = Math.floor(Math.random() * 500) + 1;
  arr[arr.length] = randomnumber;
}

const newarr = arr.map(() => {
  return <Content className="content" />;
});

const GridDream = ({ styles, title, content, items, shapes }) => {
  return (
    <Container styles={styles} className="number-items">
      <LineHeader alignSelf="center">{title}</LineHeader>
      <BoxHeading content={content}>
        <Items className="items">
          {items.map(item => (
            <Item key={item.number} {...item} />
          ))}
        </Items>
        <Gridson>{newarr}</Gridson>
        <div>
          {shapes.map(shape =>
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
                fill="var(--primary)"
                style={shape.style}
              />
            ),
          )}
        </div>
      </BoxHeading>
    </Container>
  );
};

GridDream.propTypes = {
  title: string,
  content: string,
  items: arrayOf(
    exact({
      number: string,
      title: string,
      content: string,
    }),
  ),
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
};

export default GridDream;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, arrayOf, object, exact, number } from 'prop-types';
import { Prism } from 'react-syntax-highlighter';
import { atomDark, atomDefault } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { BoxHeading, LineHeader, Shape, Rectangle } from '../components';
import ThemeContext from '../components/ThemeContext';
import { renderContent } from '../utils';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 177px 80px;
  text-align: center;
  ${props => props.styles}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: '${props => props.width}';
  height: auto;
  margin: auto;
  position: absolute;
  background: url('${props => props.src}') no-repeat center/cover;
`;

const Code1 = ({ title, content, codeSnippets, image, shapes, styles, language, stylesObj }) => {
  const theme = useContext(ThemeContext);
  const codeItems = codeSnippets.map(code => (
    <Prism
      key={code.id}
      language={language}
      style={theme === 'light' ? atomDefault : atomDark}
      customStyle={{ background: theme === 'light' ? 'var(--white)' : 'var(--black)', ...stylesObj }}
    >
      {code.content.trim()}
    </Prism>
  ));
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
        fill="var(--primary)"
        style={shape.style}
      />
    ),
  );
  return (
    <Container styles={styles} className="code">
      <LineHeader alignSelf="center">{title}</LineHeader>
      <BoxHeading align="center" content={renderContent(content)} withMargin>
        <Content>{codeItems}</Content>
        <Img src={image.src} style={{ top: `${image.top}`, left: `${image.left}` }} width={image.width} />
        {shapeItems}
      </BoxHeading>
    </Container>
  );
};

Code1.propTypes = {
  title: string,
  content: string,
  image: object,
  shapes: arrayOf(
    exact({
      number: string,
      width: number,
      height: number,
      src: string,
      style: object,
    }),
  ),
  codeSnippets: arrayOf(
    exact({
      id: string,
      content: string,
    }),
  ),
  stylesObj: object,
  language: string,
  styles: arrayOf(string),
};

Code1.defaultProps = {
  stylesObj: {},
};

export default Code1;

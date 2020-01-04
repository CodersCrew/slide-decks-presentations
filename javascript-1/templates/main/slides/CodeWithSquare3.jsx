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

const Image = styled.img`
  width: 30%;
  position: absolute;
  top: 10%;
  left: 35%;
`;

const SquareInfo = styled.div`
  position: absolute;
  border: 2px solid grey;
  width: 350px;
  height: 60px;
  top: 49%;
  left: 27.7%;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  text-align: center;
  p {
    font-size: 90px;
    font-weight: bold;
  }
`;

const CodeWithSquare3 = ({
  title,
  content,
  additionalInfo,
  shapes,
  codeSnippets,
  styles,
  language,
  stylesObj,
  image,
  squareInfo,
}) => {
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
  const additionalInfoItems = additionalInfo.map(info => (
    <AdditionalInfo key={info.id} style={{ top: `${info.top}`, left: `${info.left}` }}>
      {renderContent(info.text)}
    </AdditionalInfo>
  ));

  const squareInfoItems = squareInfo.map(info => (
    <SquareInfo
      key={info.id}
      style={{ top: `${info.top}`, left: `${info.left}`, width: `${info.width}`, height: `${info.height}` }}
    >
      {renderContent(info.text)}
    </SquareInfo>
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
        {additionalInfoItems}
        {shapeItems}
      </BoxHeading>
      {squareInfoItems}
      <Image src={image} className="image" />
    </Container>
  );
};

CodeWithSquare3.propTypes = {
  title: string,
  content: arrayOf(
    exact({
      id: string,
      text: string,
    }),
  ),
  image: string,
  additionalInfo: arrayOf(
    exact({
      id: string,
      text: string,
      top: string,
      left: string,
    }),
  ),
  squareInfo: arrayOf(
    exact({
      id: string,
      text: string,
      top: string,
      left: string,
      width: string,
      height: string,
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

CodeWithSquare3.defaultProps = {
  stylesObj: {},
};

export default CodeWithSquare3;

import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

const getMeasure = num => (typeof num === 'number' ? `${num}px` : num);

const StyledSVG = styled(SVG)`
  min-width: ${props => getMeasure(props.width)};
  min-height: ${props => getMeasure(props.height)};
  position: absolute;
  svg {
    fill: ${props => props.fill};
    width: ${props => getMeasure(props.width)};
    height: ${props => getMeasure(props.height)};
  }
`;

const Shape = props => {
  return <StyledSVG {...props} className={props.className} />;
};

Shape.propTypes = {
  className: string,
  fill: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  src: string,
};

export default Shape;

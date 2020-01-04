import React from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

const getMeasure = num => (typeof num === 'number' ? `${num}px` : num);

const StyledDiv = styled.div`
  position: absolute;
  width: ${props => getMeasure(props.width)};
  height: ${props => getMeasure(props.height)};
  border: 2px solid ${props => props.fill};
`;

const Rectangle = props => {
  return <StyledDiv {...props} width={props.width} height={props.height} fill={props.fill} />;
};

Rectangle.propTypes = {
  className: string,
  fill: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};

export default Rectangle;

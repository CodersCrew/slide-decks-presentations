import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 56px 0 100px 0;

  p {
    margin-top: 120px;
    line-height: 1.5;
  }

  img {
    margin-top: 150px;
  }
`;

const Rendering = ({ title, image, content }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={theme === 'dark' ? image.dark : image.light} />
      <p>{content}</p>
    </Container>
  );
};

Rendering.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
  content: string,
};

export default Rendering;

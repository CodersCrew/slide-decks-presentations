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
    margin-top: 80px;
    line-height: 1.5;
  }

  img {
    margin-top: 80px;
    height: 45%;
  }
`;

const JSX = ({ title, image, content }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <p>{content}</p>
      <img src={theme === 'dark' ? image.dark : image.light} />
    </Container>
  );
};

JSX.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
  content: string,
};

export default JSX;

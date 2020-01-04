import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 200px 0;

  img {
    margin-top: 60px;
    width: 80%;
    height: 95%;
  }
`;

const Webpack = ({ title, image }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={theme === 'dark' ? image.dark : image.light} />
    </Container>
  );
};

Webpack.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
};

export default Webpack;

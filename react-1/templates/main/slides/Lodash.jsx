import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 56px 150px 200px 150px;

  p {
    margin-top: 100px;
  }

  img {
    margin-top: 140px;
    width: 65%;
  }
`;

const Lodash = ({ title, image, info }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <p>{info}</p>
      <img src={theme === 'dark' ? image.dark : image.light} />
    </Container>
  );
};

Lodash.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
  content: string,
};

export default Lodash;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 100px 0;

  img {
    margin-top: 200px;
  }

  p {
    margin-top: 300px;
    line-height: 1.5;
    text-align: center;
  }
`;

const AddReact = ({ title, image, content }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={theme === 'dark' ? image.dark : image.light} />
      <p>{content}</p>
    </Container>
  );
};

AddReact.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
  content: string,
};

export default AddReact;

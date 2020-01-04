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
  padding: 56px 0 122px 0;
`;

const Content = styled.p`
  margin-top: 96px;
  margin-bottom: 96px;
  text-align: center;
  line-height: 60px;
`;



const TextAlign = ({ title, content, image }) => {

  let theme = useContext(ThemeContext);

  return(
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Content>{content}</Content>
      <img src={theme === 'light'? image.light : image.dark} />
    </Container>
  );
}

TextAlign.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
};

export default TextAlign;
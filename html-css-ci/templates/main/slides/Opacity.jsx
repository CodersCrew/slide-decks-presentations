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
  padding: 56px 104px 272px 145px;
`;

const Content = styled.p`
  margin-top: 78px;
  margin-bottom: 156px;
  text-align: center;
  line-height: 60px;
`;



const Opacity = ({ title, content, image }) => {
  
  let theme = useContext(ThemeContext);

  return(
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Content>{content}</Content>
      <img src={theme === 'light'? image.light : image.dark} />
    </Container>
  );
}

Opacity.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
};

export default Opacity;
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
  padding: 56px 0 89px 0;

  img {
    padding: 0 360px 0 337px;
  }
`;

const Content = styled.p`
  margin-top: 88px;
  margin-bottom: 115px;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  line-height: 60px;
`;


const Sizing = ({ title, content, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <Content>{content}</Content>
        <img src={theme === 'light' ? image.light : image.dark} />
      </Container>
    );
  }

Sizing.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
};

export default Sizing;
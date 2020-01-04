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
  padding: 56px 261px 519px 266px;
`;

const Content = styled.p`
  margin-top: 61px;
  margin-bottom: 172px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
  line-height: 60px;
`;


const Styles3 = ({ title, content, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <Content>{content}</Content>
        <img src={theme === 'light' ? image.light : image.dark} />
      </Container>
    );
  }

Styles3.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
};

export default Styles3;
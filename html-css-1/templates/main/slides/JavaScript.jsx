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
  padding: 55px 0 203px 0;

  img {
    padding-right: 108px;
  }
`;

const Content = styled.p`
  margin-top: 69px;
  margin-bottom: 67px;
  text-align: center;
  line-height: 60px;
`;

const Image = styled.img`
  position: absolute;
  right: 11px;
  bottom: 200px;
  width: 410px;
  height: 481px;
`;


const JavaScript = ({ title, content, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <Content>{content}</Content>
        <img src={theme === 'light'? image.light : image.dark} />
        <Image src={image.robotjs} />
      </Container>
    );
  }

JavaScript.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
};

export default JavaScript;
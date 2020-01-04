import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import ThemeContext from '../components/ThemeContext';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 172px 211px 148px 226px;
`;

const Content = styled.p`
  margin-top: 118px;
  text-align: center;
  line-height: 60px;
`;


const Element1 = ({ content, image }) => {

  let theme = useContext(ThemeContext);
  
    return(
      <Container>
        <img src={theme === 'light' ? image.light : image.dark} />
        <Content>{content}</Content>
      </Container>
  );
  }

Element1.propTypes = {
  content: string,
  image: objectOf(string),
};

export default Element1;
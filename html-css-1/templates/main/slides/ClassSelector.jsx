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
  padding: 56px 0 219px 0;

  img {
    padding: 141px 398px 0 485px;
  }
`;


const ClassSelector = ({ title, image }) => {

  let theme = useContext(ThemeContext);
  
    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <img src={theme === 'light' ? image.light : image.dark} />
      </Container>
    );
  }
 

ClassSelector.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
};

export default ClassSelector;
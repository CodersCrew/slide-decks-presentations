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
  padding: 56px 0 238px 0;
`;

const Image = styled.div`
  padding: 141px 489px 0 492px;
`;


const IdSelector = ({ title, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <Image><img src={theme === 'light' ? image.light : image.dark} /></Image>
      </Container>
    );
  }

IdSelector.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
};

export default IdSelector;
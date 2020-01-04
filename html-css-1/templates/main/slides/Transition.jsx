import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 49px 133px 61px;
`;

const Content = styled.p`
  margin-top: 96px;
  margin-bottom: 136px;
  line-height: 60px;
  padding: 0 350px 0 350px;
`;


const Transition = ({ title, content, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center"><h2>{title}</h2></LineHeader>
        <Content>{content}</Content>
        <img src={theme === 'light' ? image.light : image.dark} />
      </Container>
    );
  }

Transition.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string.isRequired,
};

export default Transition;
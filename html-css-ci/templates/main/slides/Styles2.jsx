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
  padding: 56px 0 142px 0;
`;

const Content = styled.p`
  margin-top: 57px;
  margin-bottom: 187px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
  line-height: 60px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 186px;

  p {
    &:nth-child(1){
      color: #FC3B63;
      margin-right: 10px;
    }
  }
`;


const Styles2 = ({ title, content, image, info }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <Content>{content}</Content>
        <img src={theme === 'light'? image.light : image.dark} />
        <Info>
          <p>UWAGA!</p>
          <p>{info}</p>
        </Info>
      </Container>
    );
  }
  

Styles2.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: objectOf(string),
  info: string.isRequired,
};

export default Styles2;
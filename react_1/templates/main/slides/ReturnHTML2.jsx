import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 100px 0;

  img {
    margin-top: 80px;

    &:nth-child(3) {
      width: 30%;
      height: 60%;
      align-self: flex-end;
      padding-right: 90px;
    }
  }
`;

const ReturnHTML2 = ({ title, image, gif }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <img src={theme === 'dark' ? image.dark : image.light} />
      <img src={gif} />
    </Container>
  );
};

ReturnHTML2.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
  content: string,
};

export default ReturnHTML2;

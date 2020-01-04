import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 203px 0;
`;

const Content = styled.p`
  margin-top: 63px;
  margin-bottom: 67px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
  line-height: 60px;
`;

const Spa = ({ title, content, image }) => {
  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Content>{content}</Content>
      <img src={image} />
    </Container>
  );
};

Spa.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  image: string,
};

export default Spa;

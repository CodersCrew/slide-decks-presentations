import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--size-xl);
`;

const Title = styled.div`
  color: var(--primary);
  font-weight: var(--bold);
`;

const Content = styled.div``;

const State = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

State.propTypes = {
  title: string.isRequired,
  image: string,
};

export default State;

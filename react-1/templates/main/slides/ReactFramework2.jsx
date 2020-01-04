import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, arrayOf, objectOf, exact } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 300px 0;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 80px 72px;
  width: 100%;
  margin-top: 150px;
  text-align: center;
`;

const Item = styled.div`
  margin-bottom: 100px;

  p {
    font-size: 32px;
    margin-top: 40px;
  }
`;

const ReactFramework = ({ title, items }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Items className="items">
        {items.map(item => (
          <Item key={item.number}>
            <img src={theme === 'light' ? item.image.light : item.image.dark} />
            <p>{item.content}</p>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

ReactFramework.propTypes = {
  title: string,
  items: arrayOf(
    exact({
      number: string,
      image: objectOf(string),
      content: string,
    }),
  ),
};

export default ReactFramework;

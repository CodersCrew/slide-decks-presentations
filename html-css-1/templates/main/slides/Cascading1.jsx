import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
    display: flex;
    flex-basis: 50%;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const Right = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    padding: 56px 64px 220px 60px;

    h3 {
        line-height: 76px;
        margin-top: 113px;
        color: var(--text-primary);
    }

    img {
      margin-top: 44px;
    }
`;


const Cascading1 = ({ title, description, image, right_image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <Left>
            <img src={image} />
        </Left>
        <Right>
            <LineHeader>{title}</LineHeader>
            <h3>{description}</h3>
            <img src={theme === 'light'? right_image.light : right_image.dark} />
        </Right>
      </Container>
    );
  }


Cascading1.propTypes = {
  title: string,
  description: string,
  image: string,
  right_image: objectOf(string),
};

export default Cascading1;
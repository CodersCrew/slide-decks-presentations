import React, { useContext } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  padding: 56px 0 490px 0;
  text-align: center;

  h2 {
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 280px 568px 0 568px;
`;

const SocialMediaIcon = ({ title, icons }) => {
  const theme = useContext(ThemeContext);

  return(
    <Container>
      <LineHeader alignSelf="center"><h2>{title}</h2></LineHeader>
      <Icons>
          {
          icons.map(icon => <a href={icon.link} target="_blank"><img src={theme === 'light' ? icon.logo_light_theme : icon.logo}/></a>)
        }
      </Icons>
    </Container>
  );
}

SocialMediaIcon.propTypes = {
  icons: string,
  title: string,
};

export default SocialMediaIcon;

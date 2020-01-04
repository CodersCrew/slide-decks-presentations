import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, arrayOf, object } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  padding: 56px 0 490px 0;
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 280px 568px 0 568px;
`;

const SocialMedia = ({ title, icons }) => {
  let theme = useContext(ThemeContext);

  return (
    <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Icons>
        {icons.map(icon => (
          <a href={icon.link} key={icon.link} target="_blank">
            <img src={theme === 'light' ? icon.logo_light_theme : icon.logo} />
          </a>
        ))}
      </Icons>
    </Container>
  );
};

SocialMedia.propTypes = {
  icons: arrayOf(object),
  title: string,
};

export default SocialMedia;

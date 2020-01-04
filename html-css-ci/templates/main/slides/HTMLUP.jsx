import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 268px 350px 406px 349px;
`;

const Content = styled.p`
  margin-bottom: 139px;
  text-align: center;
  line-height: 60px;
`;



const HTMLUP = ({ content, icon, link }) => (
  <Container>
    <Content>{content}</Content>
    <a href={link} target="_blank"><img src={icon} /></a>
  </Container>
);

HTMLUP.propTypes = {
  content: string,
  icon: string,
  link: string,
};

export default HTMLUP;
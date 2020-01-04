import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 79px;
}

    img {
        width: 150px;
        height: 150px;
    }
`;



const CSSDiner = ({ title, icon, link }) => (
  <Container>
        <h1>{title}</h1>
        <a href={link} target="_blank"><img src={icon} /></a>
  </Container>
);

CSSDiner.propTypes = {
  title: string.isRequired,
};

export default CSSDiner;
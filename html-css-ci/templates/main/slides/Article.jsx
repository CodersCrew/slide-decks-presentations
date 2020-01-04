import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;


const Article = ({ image }) => (
  <Container>
    <img src={image} />
  </Container>
);

Article.propTypes = {
  image: string.isRequired,
};

export default Article;
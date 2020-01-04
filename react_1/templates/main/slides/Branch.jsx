import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 135px 0;

  img {
    width: 50%;
    height: 100%;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  h3 {
    font-weight: var(--bold);
    color: var(--primary);
  }
`;

const Branch = ({ title, image, info }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <img src={image} />
      <h3>{info}</h3>
    </Container>
  );
};

Branch.propTypes = {
  title: string.isRequired,
  image: string,
  info: string,
};

export default Branch;

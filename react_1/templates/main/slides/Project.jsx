import styled from 'styled-components';
import { arrayOf, exact, string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Info = styled.div`
  margin-bottom: 80px;

  h3 {
    color: var(--primary);
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
  }
`;

const Project = ({ infos }) => {
  return (
    <Container>
      {infos.map(info => (
        <Info key={info.src}>
          <h3>{info.content}</h3>
          <a href={info.src} target="_blank">
            <p>{info.src}</p>
          </a>
        </Info>
      ))}
    </Container>
  );
};

Project.propTypes = {
  infos: arrayOf(
    exact({
      content: string,
      src: string,
    }),
  ),
};

export default Project;

import styled from 'styled-components';
import { string, number, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 50px 200px 50px;

  > p {
    margin: 80px 0 250px 0;
    text-align: center;
    font-weight: var(--bold);
  }
`;

const Examples = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Item = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 50px;
    color: var(--primary);
  }
`;

const Controlled = ({ title, content, examples }) => (
  <Container>
    <LineHeader alignSelf="center">{title}</LineHeader>
    <p>{content}</p>
    <Examples>
      {examples.map(example => (
        <Item key={example.number}>
          <h1>{example.number}</h1>
          <p>{example.description}</p>
        </Item>
      ))}
    </Examples>
  </Container>
);

Controlled.propTypes = {
  title: string,
  content: string,
  examples: arrayOf(
    exact({
      number: number,
      description: string,
    }),
  ),
};

export default Controlled;

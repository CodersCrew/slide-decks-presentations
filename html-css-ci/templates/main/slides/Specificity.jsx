import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 0 192px 0;
`;


const Items = styled.div`
    margin-top: 96px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 370px 0 106px;
`;

const Item = styled.div`
    margin-bottom: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin-right: 42px;
    }
`;



const Specificity = ({ title, icon, items }) => (
  <Container>
      <LineHeader alignSelf="center">{title}</LineHeader>
      <Items>
        {
            items.map(item => 
                <Item {...item} key={item.description}>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank"><img src={icon}/></a>
                </Item>
            )
        }
      </Items>
  </Container>
);

Specificity.propTypes = {
  title: string,
  description: string,
  icon: string,
  items: arrayOf(
      exact({
          description: string,
          link: string,
      }),
  ),
};

export default Specificity;
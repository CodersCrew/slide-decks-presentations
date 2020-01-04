import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 166px 0;
`;


const Items = styled.div`
    margin-top: 129px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 602px 0 112px;
`;

const Item = styled.div`
    margin-bottom: 74px;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin-right: 40px;
    }
`;



const FlexBox3 = ({ title, icon, items }) => (
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

FlexBox3.propTypes = {
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

export default FlexBox3;
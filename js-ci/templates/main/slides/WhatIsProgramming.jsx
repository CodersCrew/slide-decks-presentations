import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${props => props.styles}
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin-top: -80px;
`;

const Header = styled.h1`
  text-align: center;
`;

const SubHeader = styled.h2`
  margin-top: 24px;
  text-align: center;
  color: var(--yellow);
`;

const WhatIsProgramming = ({ title2, title, subtitle, styles }) => (
  <Container styles={styles} className="title">
    <Middle className="middle">
      <Header className="title">{title}</Header>
      <SubHeader className="subtitle">{subtitle}</SubHeader>
      <Header className="title2">{title2}</Header>
    </Middle>
  </Container>
);

WhatIsProgramming.propTypes = {
  title2: string,
  title: string.isRequired,
  subtitle: string,
  styles: arrayOf(string),
};

export default WhatIsProgramming;

import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: [col-one] 33.3% [col-two] 33.3% [col-three] 33.4%;
  height: 4vh;
  text-align: center;
  padding-top: 2px;
`;

const FromTheLeft = styled.button`
  grid-column-start: col-one;
  border: 2px black solid;
`;

const FromTheMiddle = styled.button`
  grid-column-start: col-two;
  border: 2px black solid;
`;

const FromTheRight = styled.button`
  grid-column-start: col-three;
  border: 2px black solid;
`;

const NavBar = (props) => {
  return (
    <Navigation>
      <FromTheLeft>
        News from the Left
      </FromTheLeft>
      <FromTheMiddle>
        News from the Middle
      </FromTheMiddle>
      <FromTheRight>
        News from the Right
      </FromTheRight>
    </Navigation>
  )
}

export default NavBar;
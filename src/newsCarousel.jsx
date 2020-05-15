import React from 'react';
import styled from 'styled-components';

const CarouselHolder = styled.div`
  display: flex;
  justify-content: center;
  border: black 2px solid;
  transform: translate(-50%, -50%);
  padding: 100px;
  width: 400px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;

`;

class NewsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticle: null,
    }
  }

  render() {
    return (
      <CarouselHolder>
        I am your carousel
      </CarouselHolder>
    )
  }
}

export default NewsCarousel;
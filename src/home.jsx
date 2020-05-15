import React from 'react';
import styled from 'styled-components';
import NavBar from './navBar.jsx';
import NewsCarousel from './newsCarousel.jsx'

const Title = styled.header`
  text-align: center;
  font-size: 80px;
  font-style: italic;
  border: 2px black solid;
`;

const Head = styled.div`
  border: 2px black;
`

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLive: false,
    }
  }

  render() {
    return (
      <div>
        <Head>
          <Title>Unbiased News</Title>
        </Head>
        <div>
          <NavBar />
        </div>
        <div>
          <NewsCarousel />
        </div>
      </div>

    )
  }
}

export default HomePage
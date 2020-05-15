import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLive: false,
    }
  }

  render() {
    return (
      <div>I AM YOUR HOMEPAGE</div>
    )
  }
}

export default HomePage
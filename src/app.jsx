import React, { Component } from 'react';
import Lists from './components/lists';

class App extends Component {

  state = {
    contents : []
  }

  componentDidMount(){
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBQltps2E5I3wfesXGEEYwoOZpTzWyHb_c')
    .then(response => response.json())
    .then(data => this.setState({contents : data.items}));
  }

  render() {
    console.log(this.state.contents);
    return (
      <>
        <Lists contents={this.state.contents}/>
      </>
    );
  }
}

export default App;
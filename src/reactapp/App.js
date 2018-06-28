import React, { Component } from 'react';
import { DialogueContainer } from './dialogue/Dialogue.container';
import { MapContainer } from './map/Map.container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenComponent: MapContainer,
    }
  }

  render() {
    return (
      <div>
        <this.state.chosenComponent />
      </div>
    )
  }

}

export default App;

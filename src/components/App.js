import React, { Component } from 'react';
import { DialogueContainer } from './Dialogue.container';
import '../styles/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenComponent: DialogueContainer,
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

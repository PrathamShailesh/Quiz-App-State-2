import React, { Component } from 'react';
// import './App.css'; 

import FirstPage from './components/FirstPage'
import GamePage from "./components/GamePage"
import {Resultpage} from './components/Resultpage'


class App extends Component {
  constructor(){
    super()
    this.state={
      number:1
    }
  }

  incrementNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.number === 1 && (
          <FirstPage incrementNumber={this.incrementNumber}/>
        )}
        {this.state.number === 2 && (
         
          <GamePage incrementNumber={this.incrementNumber}/>
        )}
        {this.state.number === 3 && (
          
        <Resultpage />
        )}
      </div>
    );
  }
}

export default App;

// export default App;

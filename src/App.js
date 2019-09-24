import React from 'react';
import Welcome from './components/Welcome'
import PowderContainer from './components/containers/PowderContainer'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="welcome-div">
          <Welcome />
        </div>
        <PowderContainer />
      </div>
    )
  }
}

export default App;

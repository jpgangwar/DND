import React, { Component } from 'react';
import './App.scss';
import DragThingsToBoxes from './Component/DragThingsToBoxes';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Drag-and-drop">
          <DragThingsToBoxes/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

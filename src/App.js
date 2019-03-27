import React from 'react';
import './App.scss';
import Instrutions from './Component/instructionScreen';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: true}
}

showDragDrop = () => {
  this.setState({show:false})
}

  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <div className="bgImg">
        {show && 
          <div className="caption">
            <div className="containerArea start-screen">
                <button className="startactivity-btn" onClick={this.showDragDrop}>Start</button>
            </div>
          </div>
          }
          {!show &&
              <Instrutions/>
            }
        </div>
      </React.Fragment>
    );
  }
}

export default App;

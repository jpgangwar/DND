import React from 'react';
import DragThingsToBoxes from './DragThingsToBoxes';
import '../scss/instruction.scss';




class Instrutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instructionScreen: false
        }
    }

    

    startGameOnDevice = () => {
        console.log('start game now');
        this.setState({instructionScreen:true})
        // this.Timeout()
      }
    render() {

      const {instructionScreen} = this.state;

        return (
            <React.Fragment>      
                <div className="instructionScreen">
                
                  {!instructionScreen &&
                    <div className="result-container">
                      <div className="result-counter">
                          <div className="redult-msg gameInstraction" >
                            <h3>Instruction</h3>
                            <div className="instructions-list">
                              <p>The learner will have to click on one of the blocks to start marking the x. The tile where x is marked will be flipped on the screen. This would reveal the questions that will have to be answer</p>
                            </div>
                            <div className="btn-area play-btn">
                              <button className="startactivity-btn" onClick={this.startGameOnDevice}>Start</button>
                            </div>  
                          </div>
                      </div>
                      </div>
                }
                {instructionScreen &&
                  <DragThingsToBoxes
                  />
                  }
                </div>
          </React.Fragment>
         );
    }
}

export default Instrutions;
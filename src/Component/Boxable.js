import React from 'react';
import DragDropContainer from './DragDropContainer';
import '../scss/boxable.scss';
import $ from 'jquery';


export default class Boxable extends React.Component {
  constructor(props) {
    super(props);
    let dataJson = window.dragndrop[this.props.index];
    this.state = {
      title: dataJson['data']['content'],
      instrctionText : dataJson['data']['InstructionText'],
      dragItems: dataJson['data']['drags'],

    }
  }

  instructionText = ()=>{
      $('#myModal1').show()
      this.props.clearTimeOut()
  }

  closeButton = () =>{
    console.log('kzvhbi')
      $('#myModal1').hide()
      this.props.resumeTimer();
  }
 
  render() {
   
    let items = this.state.dragItems;
    return (
      <React.Fragment>
        <div className="instruction-text-bg" onClick={this.instructionText}>
          <h2>{this.state.title}</h2>
        </div>
        <div className="mark"></div>
        <div id="myModal1" className="modal">
              <div className="modal-content">
                  <p className="instrction-text">Instruction</p>
                  <div className="intstruction-text">
                    <p>{this.state.instrctionText}</p>
                  </div>
                    <span className="btn-close" onClick={this.closeButton}>&times;</span>
              </div>
          </div>
      <div className="instruction-text">
        <div className="dragable-items">
        {
          items.map((item, index) => {
            return (
              <DragDropContainer
                targetKey={this.props.targetKey}
                dragData={{ item: item.item , correctBox: item.correctBox}}
                customDragElement={this.props.customDragElement}
                key={index}
              >
              {item.item}
              </DragDropContainer>
            )
          })
        }
        </div>
      </div>
      </React.Fragment>
    );
  }
}
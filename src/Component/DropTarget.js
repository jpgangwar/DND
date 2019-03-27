import React from 'react';
import PropTypes from 'prop-types';


class DropTarget extends React.Component {
  constructor(props) {
    super(props);
    this.elem = null;
    this.state = {
      counter : 0
    };
    console.log('component loaded')
    

      this.url = "http://streaming.tdiradio.com:8000/house.mp3";
      this.audio = new Audio(this.url);
      this.wrongUrl = "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3";
      this.WrongAudio = new Audio(this.wrongUrl);

      this.handleDrop = this.handleDrop.bind(this)
  }
  

  componentDidMount() {
    // debugger
    this.elem.addEventListener(`${this.props.targetKey}DragEnter`, this.handleDragEnter, false);
    this.elem.addEventListener(`${this.props.targetKey}DragLeave`, this.handleDragLeave, false);
    this.elem.addEventListener(`${this.props.targetKey}Drop`, this.handleDrop, false);
  }

  createEvent(eventName, eventData) {
    // utility to create an event
    let e;
    if (typeof window.CustomEvent !== 'function') {
      // we are in IE 11 and must use old-style method of creating event
      e = document.createEvent('CustomEvent');
      e.initCustomEvent(eventName, true, true, {});
    } else {
      e = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    }
    Object.assign(e, eventData);
    return e;
  }

 

  
  handleDrop = (e) => {
    // debugger
    // tell the drop source about the drop, then do the callback
    
    const evt = this.createEvent(
      `${this.props.targetKey}Dropped`,
      {
        dragData: e.dragData,
        dropElem: this.elem,
        dropData: this.props.dropData,
      },
    );
 
    e.containerElem.dispatchEvent(evt);
    let sIndex = this.props.index;
    let arr = e.dragData['correctBox'];
  
    
    let isCorrect = false;
    
    arr.map((item, index) => {
      if (item === sIndex) {
        isCorrect = true;
        // this.setState({
        //   counter: this.state.counter + 1
        // })
      }
    })
    
    console.log(this.state.counter);
    
    if (this.props.dragLength === this.counter) {
      
    };

    
    if (isCorrect) {
      this.props.onHit(e);
      this.audio.play();
      this.WrongAudio.pause();
      setTimeout(() => {
        this.audio.pause();
      }, 1000);   
    }else{
      this.audio.pause();
      this.WrongAudio.play();
      setTimeout(() => {
        this.WrongAudio.pause();
      }, 1000); 
    }
  }


  render() {
    return (
      <span ref={(t) => { this.elem = t; }} >
        {this.props.render ? this.props.render() : this.props.children}
      </span>
    );
  }
}

DropTarget.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,

  // needs to match the targetKey in the DragDropContainer -- matched via the enter/leave/drop event names, above
  targetKey: PropTypes.string,

  // data that gets sent back to the DragDropContainer and shows up in its onDrop() callback event
  dropData: PropTypes.object,

  // callbacks
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onHit: PropTypes.func,
};

DropTarget.defaultProps = {
  children: null,
  targetKey: 'ddc',
  onDragEnter: () => {},
  onDragLeave: () => {},
  onHit: () => () => {},
  dropData: {},
  render: null,
};

export default DropTarget;

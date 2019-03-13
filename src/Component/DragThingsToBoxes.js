import React from 'react';
import '../scss/DragThingsToBoxes.scss';
import Box from './Box';
import Boxable from './Boxable';
// import $ from 'jquery'; 


function doSomething(){
    // console.log('doSomthing');
    // $('#popup_box').show();

} 

class DragThingsToBoxes extends React.Component {
    constructor(props) {
        super(props);

    }
 
    componentDidMount(){
        var timeLeft = 30;
        var elem = document.getElementById('timer_counter');
        
        var timerId = setInterval(countdown, 1000);
        
        function countdown() {
          if (timeLeft < 0) {
            clearTimeout(timerId);
            doSomething(this);
          } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
          }
        }
    }


    render() { 

        const MultipleBoxs = [0,1,2];
        const MultipleBox = MultipleBoxs.map((index) =>{
            return (<Box key={index} targetKey="box"/>);
        });

        const {timeLeft} = this.props;
        return ( 

            <div className="drag_things_to_boxes">
                <div id="popup_box" className="overlay"> 
                    <h1 id="countDown">Game over</h1>
                    <a id="popupBoxClose">Try again</a>    
                </div>
                <h2>Drag and Drop</h2>
                <p className="timer-count-box">
                    <span id="timer_counter">{timeLeft}</span>
                </p>
                <div className="things_to_drag">
                    <Boxable targetKey="box" item={this.props.item} index="0" />
                </div>
                <div className="boxes">
                {/* Here multiple box */}
                    {MultipleBox}
                </div>
                <div style={{clear: 'both'}}>&nbsp;</div>
            </div>
         );
    }
}
 
export default DragThingsToBoxes;
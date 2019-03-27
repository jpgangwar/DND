import React from 'react';
import '../scss/DragThingsToBoxes.scss';
import Box from './Box';
import Boxable from './Boxable';
import $ from 'jquery';

function gameOverPopUp(){
    return(
            $('#myModal').show()
    )
}


class DragThingsToBoxes extends React.Component {
    constructor(props) {
        super(props);
        this.arrCounter=[0,0,0,0,0,0];
        let dataJson = window.dragndrop[0];
        this.state={
            box: dataJson['data']['drops'],
            DragBox: dataJson['data']['drops'],
            DragsLength: dataJson['data']['drags'].length
        }
        
        this.Timeout()
        this.timeLeft = 30;

        
    }

    Timeout () {
        this.countdown = () => {
            if (this.timeLeft < 0) {
                clearTimeout(this.timerId);
                gameOverPopUp();
            } else if(this.timeLeft < 10) {
                    document.getElementById('timer_counter').innerHTML = "0" + this.timeLeft--;
                }else{
                    document.getElementById('timer_counter').innerHTML = this.timeLeft--;
                }
            }
            this.timerId = setInterval(this.countdown, 1000);

    }

    SuccessModal = () =>{
        return(
            $('#SuccessModal').show()
        )
    }

    clearTimeOut = () =>{
        this.timerId = clearTimeout(this.timerId);
    }

    resumeTimer = () => {
        this.Timeout()
    }

    ResetBuuton = () => {
        window.location.reload();
    }
    checkCounter = (id) => {
        let count = 0;
        this.arrCounter[id] =this.arrCounter[id]+1;
        for (let index = 0; index < this.arrCounter.length; index++) {
            count= count + this.arrCounter[index]
        }
        if(count === this.state.DragsLength){
            this.SuccessModal()
            clearInterval(this.timerId)
        }  
    }

    
    

    render() { 
        const DragBoxs = this.state.DragBox;
        const BoxNames = DragBoxs.map((item,index) =>{
            return item.BoxName
        });
       
        const MultipleBoxs = this.state.box;
        const MultipleBox = MultipleBoxs.map((item,index) =>{
            return (<Box key={index} targetKey="box" index={index} BoxNames={BoxNames[index]}  dragLength ={ this.state.DragsLength} checkCounter={this.checkCounter}/>);
        });

        

        return (
            <React.Fragment>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <p className="try-again-text">Try again!</p>
                        <div className="containerArea try-again-btn">
                            <button className="try-again-btn-reset" onClick={this.ResetBuuton}>Reset</button>
                        </div>
                    </div>
                </div> 
                <div id="SuccessModal" className="modal">
                    <div className="modal-content">
                        <p className="good-work-text">Good Work!</p>
                        <div className="containerArea try-again-btn">
                            <button className="try-again-btn-reset" onClick={this.ResetBuuton}>Reset</button>
                        </div>
                    </div>
                </div>    
                <div className="drag_things_to_boxes">
                    <p className="timer-count-box demo"><span id="timer_counter"></span></p>
                    <div className="things_to_drag">
                        <Boxable targetKey="box" item={this.props.item} index="0" resumeTimer={this.resumeTimer} clearTimeOut={this.clearTimeOut} />
                    </div>
                    <div className="boxes">
                        {MultipleBox}
                    </div>
                    <div style={{clear: 'both'}}>&nbsp;</div>
                </div>
            </React.Fragment>  
         );
    }
}
 
export default DragThingsToBoxes;
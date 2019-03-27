import React, { Component } from 'react';
import BoxItem from './BoxItem';
import DropTarget from './DropTarget';
import '../scss/box.scss';
var shortid = require('shortid');

export default class Box extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        counter : 0,
      };
    }
  
    handleDrop = (e) => {
      let items = this.state.items.slice();
      items.push({
        item: e.dragData.item,
        correctBox: e.dragData.correctBox,
        uid: shortid.generate(),
        // length: items.length
      });
      this.setState({items: items});

      this.setState({
        counter: this.state.counter + 1
      }) 
      // console.log(items);
      // console.log(e.dragData.correctBox)
      e.containerElem.style.visibility="hidden";
      this.props.checkCounter(this.props.index);
    };



    render() {
      return (
        <div className="component_box">
            <DropTarget
              onHit={this.handleDrop}
              targetKey={this.props.targetKey}
              index={this.props.index}
              dragLength={this.props.dragLength}
            >
            <div className="box">
              <p>{this.props.BoxNames}</p>
              {this.state.items.map((item,  index) => {
                  return (
                    <BoxItem key={item.uid} uid={item.uid}  index={index}>
                      {/* <span>{item.item}</span> */}
                    </BoxItem>
                  )
                })}
              </div>
            </DropTarget>
           {/* <span>{this.state.items.length}</span> */}
        </div>
      );
    }
  }
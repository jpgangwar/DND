import React from 'react';
import BoxItem from './BoxItem';
import DropTarget from './DropTarget';

var shortid = require('shortid');


export default class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        
      };
    }
  
    handleDrop = (e) => {
      let items = this.state.items.slice();
      items.push({
        item: e.dragData.item,
        correctBox: e.dragData.correctBox,
        uid: shortid.generate(),
        length: items.length
      });
     
      this.setState({items: items});
      console.log(items);
      e.containerElem.style.visibility="hidden";
    };
 
    


  
  
    render() {
      return (

        <div className="component_box">
            <DropTarget
              onHit={this.handleDrop}
              targetKey={this.props.targetKey}
            >
            <div className="box">
              {this.state.items.map((item, index) => {
                  return (
                    <BoxItem key={item.uid} uid={item.uid}  index={index}>
                      <span>{item.item}</span>
                    </BoxItem>
                  )
                })}
              </div>
            </DropTarget>
           <span>{this.state.items.length}</span>
        </div>
      );
    }
  }
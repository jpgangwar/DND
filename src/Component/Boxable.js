import React from 'react';

import DragDropContainer from './DragDropContainer';
// var shortid = require('shortid');

export default class Boxable extends React.Component {
  constructor(props) {
    super(props);
    let dataJson = window.dragndrop[this.props.index];
    this.state = {
      title: dataJson['data']['content'],
      dragItems: dataJson['data']['drags'],
    }

    console.log(this.state.dragItems)
  }
  render() {
    let items = this.state.dragItems;
    return (
      <div className="boxable_component" style={{ display: 'inline-block' }}>
        <h2>{this.state.title}</h2>
        {
          items.map((item, index) => {
            return (
              <DragDropContainer
                targetKey={this.props.targetKey}
                dragData={{ item: item.item , correctBox: item.correctBox}}
                customDragElement={this.props.customDragElement}
                key={"s"+index}
              >
              {item.item}
              </DragDropContainer>
            )
          })
        }
      </div>
    );
  }
}
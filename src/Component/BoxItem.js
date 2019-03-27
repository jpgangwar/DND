import React from 'react';
import '../scss/BoxItem.scss';

export default class BoxItem extends React.Component {
    
  
    render() {
    
      return (
        <div className="box_item_component">
            <div className="outer">
              <div className="item">
                {/* {this.props.children} */}
              </div> 
            </div>
        </div>
      );
    }
  }
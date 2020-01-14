import React from 'react';
import './style.css'

//Draggable item
export default class Block extends React.Component {
    render() {
        return (
            <div
                className="reactdnd__block"
                draggable
                onDragStart={(e) => this.handleDragStart(e)}
            >
                {this.props.val}
            </div >
        )
    }

    handleDragStart(e) {
        e.dataTransfer.setData("id", this.props.id);
    }
}

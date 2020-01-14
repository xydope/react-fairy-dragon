import React from 'react';
import './style.css'


export default class Block extends React.Component {
    render() {
        return (
            <div
                className="reactdnd__block"
                draggable
                onDragStart={(e) => this.handleDragStart(e)}
                onDragEnd = {(e)=> this.props.handleDragEnd(e, this.props.id)}
            >
                {this.props.val}
            </div >
        )
    }

    handleDragStart(e) {
        e.dataTransfer.setData("id", this.props.id);
        e.dataTransfer.setData("val", this.props.val)
    }
}

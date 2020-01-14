import React from 'react';
import './style.css';

//Droppable item
export default class Box extends React.Component {
    render() {
        return (
            <div
                className="reactdnd__box"
                onDrop={(e) => this.props.handleDrop(e, this.props.name)}
                onDragOver = {this.handleDragOver}>
                <div className="box__title">{this.props.name}</div>
                {this.props.children}

            </div>
        )
    }
    
    handleDragOver(e) {
        e.preventDefault();
    }
}
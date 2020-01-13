import React from 'react';
import './style.css'


export default class Block extends React.Component {
    constructor(props){
        super(props);
        this.id = this.props.id;
    }
    render() {
        return (
            <div
                className="reactdnd__block"
                draggable="true"
                onDragStart={this.props.onDragStart}
                onDragEnd={this.props.onDragEnd}>
                {this.props.val}
            </div>
        )
    }
}

import React from 'react';
import './style.css';
import Block from '../block'


export default class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: [
                { id: 1, val: "Block1" },
                { id: 2, val: "Block2" }
            ]
        }



        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    render() {
        return (
            <div className="reactdnd__box" onDragEnd={((item) => console.log("Destination: ", item.currentTarget))}>
                {this.props.name}
                {this.state.blocks.slice().map((item) => {
                    return <Block key={item.id} val={item.val} onDragEnd={this.handleDragEnd} />
                })}
            </div>
        )
    }

    handleDragStart(item) {

    }

    handleDragEnd(item) {
        console.log(item.id)
    }
}
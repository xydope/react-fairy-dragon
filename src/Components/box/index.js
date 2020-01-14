import React from 'react';
import './style.css';
import Block from '../block'


export default class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: this.props.blocks
        }

        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    render() {
        return (
            <div className="reactdnd__box" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
                <div className="box__title">{this.props.name}</div>
                {this.state.blocks.slice().map((item) => {
                    return <Block id={item.id} key={item.id} val={item.val} handleDragEnd={this.handleDragEnd} />
                })}
            </div>
        )
    }
    // Получилась фигня, надо поднимать state на lvl выше и управлять рендером 
    // не кадым отдельным стейтом боксов, а всем еще до фильтрации.
    handleDrop(e) {
        let id = e.dataTransfer.getData("id");
        let val = e.dataTransfer.getData("val");
        let newState = [...this.state.blocks, { id: Number(id), val: val, block: this.props.name }];
        this.setState({ blocks: newState })
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDragEnd(e, id) {
        this.setState({ blocks: this.state.blocks.filter((block) => block.id !== id && block) });
    }
}
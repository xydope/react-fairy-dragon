import React from 'react';
import DndPortal from './DndPortal';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDrag: false }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this)
    }

    handleMouseDown({ clientX, clientY }) {
        this.setState({ isDrag: true, style: { left: clientX, top: clientY } })
    }

    handleMouseUp() {
        this.setState({ isDrag: false })
    }

    render() {
        return (
            this.state.isDrag
                ? <DndPortal
                    onMouseUp={this.handleMouseUp}
                    style={this.state.style}
                    children={this.props.children}
                />
                : <div
                    className="dnd-item"
                    onMouseDown={this.handleMouseDown}
                    children={this.props.children}
                />

        )
    }
};





import React from 'react';
import { createPortal } from 'react-dom';
//компонент создает портали и обработчики на mouseMove и mouseUp

export default class DragPortal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: this.props.position,
            grabOffset: this.props.grabOffset,
            style: {
                position: "fixed",
                zIndex: 1000
            }
        }
        this.root = document.createElement('div');
        this.root.classList.add('dnd-portal')
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove({ clientX, clientY }) {
        this.setState({
            position: {
                left: clientX - this.state.grabOffset.left,
                top: clientY - this.state.grabOffset.top
            }
        })
    }

    componentDidMount() {
        document.body.appendChild(this.root);
        document.addEventListener('mouseup', this.props.onMouseUp)
        document.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.props.onMouseUp)
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.body.removeChild(this.root);
    }

    render() {
        return createPortal(
            <div
                className="drag-item active"
                style={{ ...this.state.style, ...this.state.position}}
                children={this.props.children}
            />,
            this.root
        )
    }
}
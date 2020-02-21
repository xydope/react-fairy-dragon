import React from 'react';
import { createPortal } from 'react-dom';

//компонент создает портали и обработчики на mouseMove и mouseUp

export default class DragPortal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                ...this.props.style
            }
        }
        this.root = document.createElement('div');
        this.root.classList.add('dnd-portal')
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove({ clientX, clientY }) {
        this.setState({ style: { left: clientX, top: clientY } })
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
                className="drag-container"
                style={{ ...this.state.style }}
                children={this.props.children}
            />,
            this.root
        )
    }
}
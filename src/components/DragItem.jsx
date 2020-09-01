import React from 'react';
import DndPortal from './DndPortal';
import DndPlaceholder from './DndPlaceholder';
import { getGrabOffset } from './DndUtils';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDrag: false};
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    
    handleMouseDown({ clientX, clientY, currentTarget, button }) {
        if (!button) {
            let grabOffset = getGrabOffset({ clientX, clientY, currentTarget });

            this.setState({
                isDrag: true,
                grabOffset,
                position: { left: clientX - grabOffset.left, top: clientY - grabOffset.top },
                size: { width: currentTarget.offsetWidth, height: currentTarget.offsetHeight },
            });
        }
    }

    handleMouseUp() {
        this.setState({ isDrag: false });
    }

    render() {
        return (
            this.state.isDrag
                ? <>
                    <DndPlaceholder
                        size={this.state.size}
                    />
                    <DndPortal
                        onMouseUp={this.handleMouseUp}
                        position={this.state.position}
                        children={this.props.children}
                        grabOffset={this.state.grabOffset}
                    />
                </>
                : <div
                    className="drag-item"
                    onMouseDown={this.handleMouseDown}
                    children={this.props.children}
                    onMouseEnter={(event)=> {
                        console.log("mouseEnter")

                    }}
                />



        )
    }
};





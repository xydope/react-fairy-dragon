import React from 'react';

export default class Draggble extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            style: {},
            shift: {},
            isDrag: false,
        }
    }

    handleMouseDown = ({ currentTarget, clientX, clientY, button }) => {
        !button && this.setState({
            style: {
                width: currentTarget.offsetWidth,
                height: currentTarget.offsetHeight
            },
            shift: {
                //точка клика
                x: clientX - currentTarget.getBoundingClientRect().left,
                // Т.к. поворот transform(rotate) делается по левому верхнему углу, будем поднимать карточку на высоту градуса поворота.
                y: clientY - currentTarget.getBoundingClientRect().top + Math.PI * 5 / 180 * clientX - currentTarget.getBoundingClientRect().left
            },
        }, () => {
            document.addEventListener("mousemove", this.handleMouseMove);
            document.addEventListener("mouseup", this.handleMouseUp);
        })
    }

    handleMouseMove = ({ pageX, pageY }) => {
        let { style, shift } = this.state;
        this.setState({
            style: {
                ...style,
                position: "absolute",
                zIndex: 1000,
                left: pageX - shift.x,
                top: pageY - shift.y,
                transform: "rotate(5deg)",
                cursor: "grabbing",
            },
            isDrag: true
        });
    }

    handleMouseUp = () => {
        this.setState({ style: {}, shift: {}, isDrag: false })
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    }

    findDroppable = (clientX, clientY) => {
        let elem = document.elementFromPoint(clientX, clientY)
        if (elem)
            return elem.closest('.droppable');
        else
            return null;
    }

    render() {
        return (
            <>
                <div
                    onDrag={() => {
                        return true
                    }}
                    onDragOver={(e) => {
                        console.log(e)
                    }}
                    className="draggable"
                    onMouseDown={this.handleMouseDown}
                    onClick={()=>{console.log('click')}}
                    style={this.state.style}
                />

            </>
        )
    }
}


/*

*/
import React, { useState } from 'react';

const Draggable = () => {

    const [{ left, top }, setPosition] = useState({ left: "", top: "" });

    const handleDragStart = (event) => {
        let img = document.createElement("img")
        event.dataTransfer.setDragImage(img, 0, 0)
        event.dataTransfer.effectAllowed = "move";
    }

    const getPosition = (target) => {
        let parent = target.parentNode.getBoundingClientRect();
        let element = target.getBoundingClientRect();
        let left = element.left - parent.left;
        let top = element.top - parent.top;

        return { left, top };
    }

    //{ pageX, pageY, target }
    const handleDrag = ({ target, clientX, clientY }) => {
        let { parentNode, offsetWidth, offsetHeight } = target;
        let parent = parentNode.getBoundingClientRect();
        let left = clientX - parent.left - offsetWidth / 2 + 'px';
        let top = clientY - parent.top - offsetHeight / 2 + 'px';

        setPosition({ left, top })
    }

    const handleDragEnd = ({ target }) => {
    }


    //onDrag={handleDrag}

    return (
        <div
            className={`draggable`}
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            style={{ left, top }}
        >
            Draggable
        </div>
    )
}

export default Draggable;

/*

*/
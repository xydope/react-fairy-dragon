import React from 'react';

const Droppable = ({ children }) => {

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    return (
        <div
            className="droppable"
            onDragOver={handleDragOver}
            onDrop={(event) => event}
        >
            {children}
        </div>
    )
}

export default Droppable;

/*
onClick={(event) => {
                { screenX, screenY, pageX, pageY }
                console.log(`Screen: X${screenX} Y${screenY} Page: X${pageX} Y${pageY}`)
            }}
*/